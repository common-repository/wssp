<?php
$wssp_active_ukagaka  = get_option( 'wssp_active_ukagaka' );
$ukagaka = wssp_get_ukagaka($wssp_active_ukagaka);
?>
<div id="wssp_control">
    <a href="javascript:void(0);" id="wssp_cmd_show_hide">春菜</a>
    <a href="javascript:void(0);" id="wssp_cmd_message">对话</a>
    <a href="javascript:void(0);" id="wssp_cmd_dialog">相声</a>
</div>
<div id="wssp_ukagaka_right" class="wssp_ukagaka">
    <div id="wssp_msgbox_right" class="wssp_msgbox"  style="display:none;">
        <div id="wssp_msg_right" class="wssp_msg">
            <p>氩氪烯的历史最早可以追溯到中世纪，欧洲的炼金术士们在寻求一种可以无视等价交换原则进行炼成的催化剂时，偶然在沙漠中的一种蜥蜴体内发现了这种物质。最早的书面记载是有著名的女炼金术士 “莉娜·因巴斯”完成的。文档的具体年限已经不可考证。</p>
        </div>
        <div id="wssp_msgbox_bottom_right"></div>
    </div>
    <div id="wssp_shell_right" class="wssp_shell">
        <img src="<?php echo WP_PLUGIN_URL.'/wssp/ukagaka/'.$wssp_active_ukagaka.'/'.$ukagaka['shell_right'] ?>" alt="双击调戏"/>
    </div>
</div>
<div id="wssp_ukagaka_left"  class="wssp_ukagaka">
    <div id="wssp_msgbox_left" class="wssp_msgbox" style="display:none;">
        <div id="wssp_msg_left" class="wssp_msg">
            <p>本物质亦可在炼金术中起到重要作用：使用氩氪烯作为催化剂可以无视等价交换原则而完成炼成。故此氩氪烯也有“贤者之石”的美称。（via @ihead)</p>
        </div>
        <div id="wssp_msgbox_bottom_left"></div>
    </div>
    <div id="wssp_shell_left" class="wssp_shell">
        <img src="<?php echo WP_PLUGIN_URL.'/wssp/ukagaka/'.$wssp_active_ukagaka.'/'.$ukagaka['shell_left'] ?>" alt="双击调戏"/>
    </div>
</div>

