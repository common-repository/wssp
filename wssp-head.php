<?php
$wssp_active_ukagaka  = get_option( 'wssp_active_ukagaka' );
$ukagaka = wssp_get_ukagaka($wssp_active_ukagaka);
?>
<script type="text/javascript">
    var WP_PLUGIN_URL="<?php echo WP_PLUGIN_URL; ?>",
        WSSP_UKAGAKA="<?php echo $wssp_active_ukagaka ?>",
        WSSP_UKAGAKA_GHOST="<?php echo $ukagaka['ghost']?>";
</script>