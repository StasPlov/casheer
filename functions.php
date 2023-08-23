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
	$script_directory = get_template_directory() . '/vue/dist/js/'; // Укажите путь к директории со скриптами
	$script_url = get_template_directory_uri() . '/vue/dist/js/'; // Укажите URL-адрес директории со скриптами

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

function enqueue_style_custom() {
	$script_directory = get_template_directory() . '/vue/dist/css/'; // Укажите путь к директории со стилями
	$script_url = get_template_directory_uri() . '/vue/dist/css/'; // Укажите URL-адрес директории со стилями
	
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

?>
