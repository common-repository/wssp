var WSSP_Config = {
    name:{
        left:"火狐子",
        right:"绿坝娘"
    },
    hover:{
        enabled:true,
        needclick:true,
        words:{
            left:[
            "好孩子上网要找火狐姐姐哦Nyoron！",
            "Nyoron～绿坝娘你个傲娇抓不到我",
            "用火狐子上网可以不中病毒哦Nyoron！",
            "听说其实绿坝娘是外国人呐Nyoron？",
            ],
            right:[
            "无路赛！无路赛！无路赛！H是不对的！",
            "大小姐我可是价值47，100，000人民币的哦！",
            "你才傲娇，你全家都是傲娇！",
            "再看H小心我和谐你哦！",
            "工口网站什么的最讨厌了!",
            ]
        }
    },
    ai:{
        enabled:true,
        menu:{
            left:{
                start:"Hi, Juizでし、需要帮忙么？",
                end:"Noblesse Oblige 今後もあなたが救世主たらんことを。",
                data:{
                    who:{
                        display:"你是谁？",
                        command:function(){
                            Wizard.ShowDialog([
                                WizardDialogData("left" ,"我？我当然是英明、智慧、伟大、美丽的火狐子咯。",3000),
                                WizardDialogData("right","喂，不要吧自己说的那么好！！！",3000),
                                WizardDialogData("left" ,"啊，对面那个是绿坝娘，她其实是个蹭的累哦*^_^*～～",3000),
                                WizardDialogData("right",'<span style="font-size:200%;">&gt;_&lt 讨厌！</span>',3000),
                                ])
                            return false;
                        }
                    },
                    what:{
                        display:"你能干什么？",
                        command:function(){
                            Wizard.ShowDialog([
                                WizardDialogData("left" ,"唔……这的确是个好问题的说。",3000),
                                WizardDialogData("right","嘿嘿，其实这个家伙什么都不会干～～",3000),
                                WizardDialogData("left" ,"……",1500),
                                WizardDialogData("left" ,'仅仅是现在而已啦！<font color="red" size="5">现在而已！</font>',3000),
                                WizardDialogData("right","基于以上理由，<strong>過度の期待にご用心</strong>。",3000),
                                ]);
                            return false;
                        }
                    },
                    shutup:{
                        display:"闭嘴收声！",
                        command:function(which){
                            which.update("ToT 好吧我错了……不理你了啦！");
                        }
                    }
                }
            },
            right:{
                start:"Yes Master, 请下命令。",
                end:"任务了解，清除开始。",
                data:{
                    nothing:{
                        display:"表点我",
                        command:function(){
                            return true;
                        }
                    },
                    foobar:{
                        display:"没事，我点着玩的",
                        command:function(which){
                            which.update("-__-||没事不要在人家身上乱点啦……");
                            return false;
                        }
                    }
                }
            }
        }
    },
    init:{
        dialog:[
        WizardDialogData("left" ,"Merry Xmas! ${user}, 欢迎回来!",3000),
        WizardDialogData("right","恩，生蛋快乐！",3000),
        WizardDialogData("left" ,"是圣诞快乐！(扶额）",3000),
        WizardDialogData("right","嗯，圣诞快饿！",3000),
        WizardDialogData("left" ,"………………",3000),
        WizardDialogData("right" ,"还有新年快饿哦*^_^*",3000),
        ]
    }
};
