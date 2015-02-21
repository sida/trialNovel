//-----------------------------------

var gameMainLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;
        this.anchorX = 0;
        this.anchorY = 0;

	// // 起動画面
        // var backImage = new cc.MenuItemImage(
        //     res.BackGround,  // enableのとき
        //     null,            // disableのとき
        //     function () {
        //         cc.log("clickd title!!!!");
        //     }, this);
        // backImage.attr({
        //     x: size.width / 2,
        //     y: size.height / 2,
        // });

        // var back = new cc.Menu(backImage);
        // back.x = 0;
        // back.y = 0;
        // this.addChild(back, 0);


	// 背景画像
        this.back = new cc.Sprite(res.BackGround);
        this.back.attr({
            x: 0,
            y: 0,
            anchorX: 0,
            anchorY: 0,
        });

        this.addChild(this.back, 1);

        return true;
    }
});

var gameTalkLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;
        this.anchorX = 0;
        this.anchorY = 0;

	// 文字背景画像
        this.talk = new cc.Sprite(res.TalkWindow);
        this.talk.attr({
            x: size.width / 2,
            y: 100,
        });

	this.talk.setOpacity(230);  // 透明度
        this.addChild(this.talk, 1);

	// 文字ラベル
        var txtLabel = new cc.LabelTTF("1test\n2text\n3てすと\n4\n5\n6\n"
		 ,"res/fonts/font_1_kokugl_1.15_rls.ttf", 20
		 ,cc.size(480,200),cc.TEXT_ALIGNMENT_RIGHT);

        txtLabel.x = 0;
        txtLabel.y = 0;
        txtLabel.anchorX = 0;
        txtLabel.anchorY = 0;

        this.addChild(txtLabel, 5);

        return true;
    }
});


var gameMainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
	var layer = new gameMainLayer();
	this.addChild(layer);
	var talkLayer = new gameTalkLayer();
	this.addChild(talkLayer);
	var selector = getInstanceSelectMenuLayer();
	selector.setCallBackFunction(function (num) {
            cc.log("callback:"+num);
	    selector.setAllVisible(false);
	});
        this.addChild(selector);
	selector.setAllVisible(false);
	selector.setVisible(3,true);
    }
});


