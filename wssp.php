<?php
/*
Plugin Name: WSSP
Plugin URI: http://blog.icybear.net/wssp
Description: a ukagaka on wordpress.
Version: 0.3.6
Author: Bearice
Author URI: http://blog.icybear.net/
*/
add_action('init', 'wssp_init');
function wssp_init() {
    if(is_admin()) {
        wp_enqueue_script('jquery');
    }else {
        wp_enqueue_script('wssp',WP_PLUGIN_URL . '/wssp/wssp-main.js',array('jquery'));
        wp_enqueue_style('wssp', WP_PLUGIN_URL . '/wssp/wssp.css');
    }
    add_option("wssp_active_ukagaka", "ffgbra");
}
add_action('wp_head','wssp_head');
function wssp_head() {
    include "wssp-head.php";
}
add_action('wp_footer', 'wssp_footer');
function wssp_footer() {
    include "wssp-footer.php";
}
add_action('admin_menu','wssp_admin_menu');
function wssp_admin_menu() {
    add_submenu_page('options-general.php','WSSP Settings','WSSP Settings',8,'wssp','wssp_admin_page');
}
function wssp_admin_page() {
    include "wssp-admin.php";
}
function wssp_get_ukagaka($id) {
    try {
        $file = dirname(__FILE__).'/ukagaka/'.$id.'/index.php';
        include($file);
        return $info;
    }catch(Exception $e) {
        return null;
    }
}
function wssp_list_ukakaga() {
    $dir = scandir(dirname(__FILE__).'/ukagaka/');
    $ret = array();
    foreach ($dir as $id) {
        if($id=='.'||$id=='..')continue;
        $info = wssp_get_ukagaka($id);
        if($info) {
            $ret[$id]=$info;
        }
    }
    return $ret;
}
?>