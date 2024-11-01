(function($){
    $(function(){
        function randAry(arry){
            return arry[Math.floor(Math.random()*arry.length)];
        }
        var ukagaka = function(id){
            this.init(id);
        };
        ukagaka.prototype = {
            msgVer:0,
            init: function(id){
                this.id = id;
                var u=this;
                $('#wssp_shell_'+id).dblclick(function(){
                    u.onDblClick();
                }).click(function(){
                    u.onClick();
                });
                $('#wssp_msgbox_'+id).dblclick(function(){
                    u.hideMsgBox();
                });
            },
            show: function(){
                $('#wssp_ukagaka_'+this.id).fadeIn();
                return this;
            },
            hide: function(){
                $('#wssp_ukagaka_'+this.id).fadeOut();
                return this;
            },
            showMsgBox: function(){
                if(wssp.isMsgBoxEnabled())
                    $('#wssp_msgbox_'+this.id).fadeIn();
                return this;
            },
            hideMsgBox: function(){
                $('#wssp_msgbox_'+this.id).fadeOut();
                return this;
            },
            showMsg: function(msg,time,callback){
                this.showMsgBox();
                $('#wssp_msg_'+this.id).html(msg);
                this.msgVer++;
                if(time){
                    var _this=this,ver = this.msgVer;
                    setTimeout(function(){
                        if(ver!=_this.msgVer)return;
                        _this.hideMsgBox();
                        if(callback)callback();
                    },time)
                }
                return this;
            },
            appendMsg: function(msg){
                $('#wssp_msg_'+this.id).append(msg);
                this.msgVer++;
                return this;
            },
            showMenu: function(data){
                var content='<p>'+data.title+'</p><ul class="wssp_cmdlist">';
                for(idx in data){
                    if(idx=='title')continue;
                    var item = data[idx];
                    if(item.id&&item.id!=this.id)continue;
                    content+=
                    '<li class="wssp_cmdlist_item"><a id="wssp-menu-cmd_'+idx+'" href="javascript:void(0);">'
                    +item.display+
                    '</a></li>';
                }
                content+='</ul>';
                this.showMsgBox();
                var menu = $('#wssp_msg_'+this.id).html(content);
                this.msgVer++;
                var _this = this;
                menu.find("li.wssp_cmdlist_item a").click(function(){
                    var idx = $(this).attr('id').substring(14);
                    _this.onCommand(data[idx]);
                });
            },
            onCommand: function(cmd){
                if(cmd.command){
                    (function(ukagaka){
                        eval(cmd.command);
                    })(this);
                }else if(cmd.menu){
                    this.showMenu(cmd.menu);
                }
            },
            onDblClick: function(){
                this.showMenu(wssp.getData().menu);
            },
            onClick: function(){
                this.showMsg(randAry(wssp.getData().random[this.id]));
            }
        };
        var wssp = window.wssp = {
            data: {
                menu:{
                    title:"加载中..."
                },
                dialog:[{
                    id:'left',
                    msg:'加载中...',
                    time:0
                }]
            },
            left: new ukagaka('left'),
            right: new ukagaka('right'),
            msgBoxEnabled:true,
            isMsgBoxEnabled: function(){
                return this.msgBoxEnabled;
            },
            showAll: function(){
                this.left.show();
                this.right.show();
                $('#wssp_cmd_show_hide').html("隐藏春菜↓");
            },
            hideAll: function(){
                this.left.hide();
                this.right.hide();
                $('#wssp_cmd_show_hide').html("显示春菜↑");
            },
            showMsgBox: function(){
                this.msgBoxEnabled = true;
                this.left.showMsgBox();
                this.right.showMsgBox();
                $('#wssp_cmd_message').html("禁止对话↓");
            },
            hideMsgBox:function(){
                this.left.hideMsgBox();
                this.right.hideMsgBox();
                this.msgBoxEnabled = false;
                $('#wssp_cmd_message').html("显示对话↑");
            },
            showDialog:function(data){
                //alert(this.lastDialog);
                if(this.lastDialog)this.lastDialog.stop();
                return (this.lastDialog={
                    cancel:false,
                    timerID:null,
                    start:function(){
                        var dialog = this;
                        function dialog_itr(i){
                            if(i>=data.length||dialog.cancel)return;
                            wssp[data[i].id].showMsg(data[i].msg,data[i].time);
                            dialog.timerID=setTimeout(function(){
                                dialog_itr(i+1);
                            },data[i].time);
                        }
                        dialog_itr(0);
                        return this;
                    },
                    stop:function(){
                        if(this.timerID)clearTimeout(this.timerID);
                        cancel=true;
                    }
                }).start();
            },
            getData:function(){
                return this.data;
            }
        };
        $('#wssp_cmd_show_hide').toggle(function(){
            wssp.hideAll();
        },function(){
            wssp.showAll();
        });
        $('#wssp_cmd_message').toggle(function(){
            wssp.hideMsgBox();
        },function(){
            wssp.showMsgBox();
        });
        $('#wssp_cmd_dialog').click(function(){
            wssp.showDialog(wssp.getData().dialog);
        });
        $.getJSON(WP_PLUGIN_URL+'/wssp/ukagaka/'+WSSP_UKAGAKA+"/"+WSSP_UKAGAKA_GHOST,function(data){
            wssp.data=data;
            wssp.showAll();
            wssp.showMsgBox();
            wssp.left.onClick();
            wssp.right.onClick();
        });
    });
})(jQuery);

