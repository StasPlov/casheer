<?php

/**
 * Add theme support for various WordPress features.
 *
 * @return void
 */
function wp_blank_setup() {
	// Support programmable title tag.
	add_theme_support( 'title-tag' );

	// Support custom logo.
	add_theme_support( 'custom-logo' );

	/**
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on wp-blank, use a find and replace
	 * to change 'wp-blank' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'wp-blank', get_template_directory() . '/languages' );

	// Register top menu.
	register_nav_menus(
		array(
			'top' => esc_html__( 'Top Menu', 'wp-blank' ),
		)
	);
}
add_action( 'after_setup_theme', 'wp_blank_setup' );


/**
 * Specify JS bundle path.
 *
 * @return void
 */
function wp_blank_load_scripts()
{
	$script_directory = get_template_directory() . '/dist/js/'; // Укажите путь к директории со скриптами
	$script_url = get_template_directory_uri() . '/dist/js/'; // Укажите URL-адрес директории со скриптами

	$scripts = scandir($script_directory); // Получить список файлов в директории со скриптами

	foreach ($scripts as $script) {
		$extension = pathinfo($script, PATHINFO_EXTENSION);

		if ($extension === 'js' &&
			(strpos($script, 'app') !== false || strpos($script, 'chunk-vendors') !== false) &&
			strpos($script, '.map') === false
		) {
			$file = $script_url . basename($script, '.js') . '.js';

			wp_enqueue_script(basename($script, '.js'), $file, [], '', [
				'strategy' => 'defer'
			]); // Подключение всех файлов JS
		}
	}
}
add_action('wp_enqueue_scripts', 'wp_blank_load_scripts');

add_action('wp_enqueue_scripts', function () {
	// enqueue ninja forms css, including for any ninja forms addons
	wp_enqueue_style('nf-display', content_url('/plugins/ninja-forms/assets/css/display-structure.css'), ['dashicons']);
	wp_enqueue_style('nf-layout-front-end', content_url('/plugins/ninja-forms-style/layouts/assets/css/display-structure.css'), ['nf-display']);
	//wp_enqueue_script('nf-front-end-deps', content_url('/plugins/ninja-forms/assets/js/min/front-end-deps.js'), ['nf-front-end-deps']);
  
	// make sure that backbone is enqueued on the page, as ninja forms relies on this
	wp_enqueue_script('backbone');
  }, 100);

function enqueue_style_custom() {
	$script_directory = get_template_directory() . '/dist/css/'; // Укажите путь к директории со стилями
	$script_url = get_template_directory_uri() . '/dist/css/'; // Укажите URL-адрес директории со стилями
	
	if(!is_dir($script_directory)) {
		return;
	}

	$scripts = scandir($script_directory); // Получить список файлов в директории со стилями
	
	foreach ($scripts as $script) {
		$extension = pathinfo($script, PATHINFO_EXTENSION);

		if ($extension === 'css' &&
			strpos($script, 'app') !== false
		) {
			$file = $script_url . basename($script, '.css') . '.css';

			wp_enqueue_style(basename($script, '.css'), $file); // Подключение всех app файлов css
		}
	}
}
add_action('wp_enqueue_scripts', 'enqueue_style_custom');

/**
 * Register widget area.
 *
 * @return void
 */
function wp_blank_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'wp-blank' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here to appear in your sidebar.', 'wp-blank' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'wp_blank_widgets_init' );


function handle_getData() {
	$pageName = (string)trim($_GET['page-name']);
	$pageId = (int)trim($_GET['page-id']);
	$taxonomy = (string)trim($_GET['taxonomy']) ?? '';
	$taxonomyOnly = (bool)trim($_GET['taxonomy-only']) ?? false;

	if ($pageName === 'привет-мир' || $pageId === 1) {
		$pageName = 'home-setup';
	}

	$content = get_fields($pageName);
	
	if(empty($content)) {
		$content = get_fields($pageId);
	}

	if ($pageName === 'header-setup') {
		$content['lang'] = pll_the_languages( array( 'raw' => 1 ) );
	}

	if (!empty($taxonomy)) {
		$term['taxonomy'] = get_terms($taxonomy);

		/* if($taxonomy === 'product') {
			$term['']
		} */

		if($taxonomyOnly) {
			$result = json_decode( json_encode( $term ), true );
			wp_send_json($result);
			return;
		}

		$content['taxonomy'] = $term['taxonomy'];
	}

	

	$result = json_decode( json_encode( $content ), true );
	wp_send_json($result);
}
add_action('wp_ajax_getData', 'handle_getData');
add_action('wp_ajax_nopriv_getData', 'handle_getData');

function handle_getPostList() {
	$postId = trim($_GET['post-id']);
	$postType = trim($_GET['post-type']);
	$postCount = trim($_GET['post-count']);
	$pageNum = trim($_GET['page-num']);
	$taxonomy = $_GET['taxonomy'];
	
	$args = [
		'post_type' => $postType,
		'post_status' => 'publish',
		'posts_per_page' => $postCount,
		'paged' => $pageNum
	];

	if(!empty($postId)) {
		$args = [
			'p' => $postId,
			'post_type' => 'any'
		];
	}
	
	if(!empty($taxonomy)) {
		foreach ($taxonomy as $tax) {
			$args['tax_query'][] = [
				'taxonomy' => $tax['taxonomy'],
				'field' => 'slug',
				'terms' => $tax['term']
			];
		}
	}
	
	$postList = (new WP_Query($args))->posts;
	
	$content = [];
	foreach ($postList as $post) {
		$fileds = get_fields($post->ID);

		array_push($content, [
			'post' => $post,
			'data' => $fileds,
			'link' => get_permalink($post->ID)
		]);
	}

	$result = json_decode( json_encode( $content ), true );
	wp_send_json([
		'data' => $result,
		'count' => (int)wp_count_posts('news-post')->publish
	]);
}
add_action('wp_ajax_getPostList', 'handle_getPostList');
add_action('wp_ajax_nopriv_getPostList', 'handle_getPostList');


/* function initNinjaFormData($formId = 1) {
	// clear default loaded scripts.
	global $wp_scripts;
	unset($wp_scripts->registered);
  
	// get the requested form id
	$form_id = absint($formId);
  
	// retrieve the requested form
	ob_start();
	$form = do_shortcode("[ninja_forms id='{$form_id}']");
	ob_get_clean();
  
	// output the requested form on the page
	ob_start();
	NF_Display_Render::output_templates();
	$templates = ob_get_clean();
	$response = [
	  'form' => $form,
	  'scripts' => $wp_scripts->registered,
	  'templates' => $templates
	];
	return json_encode($response);
  
	// die, because we don't want anything else to be returned
	die();
} */
?>
