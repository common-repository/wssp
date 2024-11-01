<?php

if( $_POST['wssp_submit']) {
    $wssp_active_ukagaka  = $_POST[ 'wssp_active_ukagaka' ];
    update_option( 'wssp_active_ukagaka' , $wssp_active_ukagaka );
    ?><div class="updated"><p><strong><?php _e('Options saved.', 'wssp' ); ?></strong></p></div><?php
}
$wssp_active_ukagaka  = get_option( 'wssp_active_ukagaka' );
$ukagakas = wssp_list_ukakaga();
?>
<div class="wrap">
    <h2><?php _e( 'WSSP Options', 'wssp' ); ?></h2>
    <form name="form1" method="post" action="<?php echo str_replace( '%7E', '~', $_SERVER['REQUEST_URI']); ?>">
        <input type="hidden" name="wssp_submit" value="true">
        <p>
            <?php _e("选择春菜:", 'wssp' ); ?>
            <select name="wssp_active_ukagaka">
                <?php
                foreach ($ukagakas as $id => $ukakaga) {
                    echo '<option value="'.$id.'"'.($id==$wssp_active_ukagaka?'selected':'').' >';
                    echo $ukakaga['name'];
                    echo '</option>';
                }
                ?>
            </select>
            <input type="submit"/>
        </p>
    </form>
    <p>
        <?php _e("Ghost script：")?>
    </p>
    <p>
        <textarea cols="70" rows="25" style="width: 99%;"><?php
            $fn = dirname(__FILE__).'/ukagaka/'.$wssp_active_ukagaka.'/'.$ukagakas[$wssp_active_ukagaka]['ghost'];
            $content = file_get_contents( $fn );
            $content = htmlspecialchars( $content );
            echo $content;
            ?></textarea>
    </p><p>Left Image:</p><p>
        <?php echo '<img src="'.WP_PLUGIN_URL.'/wssp/ukagaka/'.$wssp_active_ukagaka.'/'.$ukagakas[$wssp_active_ukagaka]['shell_left'].'"></img>'?>
    </p><p>Right Image:</p><p>
        <?php echo '<img src="'.WP_PLUGIN_URL.'/wssp/ukagaka/'.$wssp_active_ukagaka.'/'.$ukagakas[$wssp_active_ukagaka]['shell_right'].'"></img>'?>
    </p>

</div>
