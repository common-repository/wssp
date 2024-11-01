<?php
### Include wp-config.php
$wp_root = '../../..';
if (file_exists($wp_root.'/wp-load.php')) {
	require_once($wp_root.'/wp-load.php');
} else {
	require_once($wp_root.'/wp-config.php');
}

$json = array(
	user => is_user_logged_in() 
				? esc_attr($user_identity) 
				: ( empty($_COOKIE['comment_author_'.COOKIEHASH]) 
						? false 
						: esc_attr($_COOKIE['comment_author_'.COOKIEHASH])),
	registered => is_user_logged_in(),
	name_left => get_option( 'wssp_name_left' ),
	name_right => get_option( 'wssp_name_right' ),
	init_data => get_option( 'wssp_init_data')
);
if($_REUQEST['callback']){
	echo '(function(){var __json_data = ' . json_encode($json) . ';' . $_REUQEST['callback'] . '(__json_data);return __json_data;})();';
}else{
	echo json_encode($json);
}
?>
