<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<?php wp_head(); ?>
	<?php wp_footer(); ?>
</head>
<body <?php body_class(); ?> 
	id="app"
	data-ajax-url="<?php echo admin_url('admin-ajax.php'); ?>"
	data-page-id="<?php echo get_the_ID(); ?>"
	data-page-name="<?php echo urldecode(get_post_field('post_name', get_the_ID()))?>"
	data-page-template="<?php echo esc_html( get_page_template_slug( get_the_ID() ) ); ?>"
	data-post-type="<?php echo get_post_type(get_the_ID()); ?>"
>