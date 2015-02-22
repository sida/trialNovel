//-----------------------------------

// ゲーム中の背景表示レイヤ
var gameMainLayer = cc.Layer.extend({
    backImage:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.anchorX = 0;
        this.anchorY = 0;

	// 背景画像
        this.backImage = new cc.Sprite(res.BackGround);
        this.backImage.attr({
            x: 0,
            y: 0,
            anchorX: 0,
            anchorY: 0,
        });

        this.addChild(this.backImage, 1);

        return true;
    },
    setImage : function (imagePath){
	var texture2d = cc.textureCache.addImage(imagePath);
	this.backImage.setTexture(texture2d);
    }
});

// 会話ウインドウ
var gameTalkLayer = cc.Layer.extend({
    txtLabel : null,
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
            anchorX : 0,
            anchorY : 0,
            x: 0,
            y: 0,
        });
	this.talk.setOpacity(230);  // 透明度
        this.addChild(this.talk, 1);

	// 文字ラベル
        this.txtLabel = new cc.LabelTTF(
	    "1test\n2text\n3てすと\n4\n5\n6\n" ,
	    gm.DEFAULT_FONT ,
	    gm.FONTSZ_TALK_WINDOW ,
	    cc.size(480-20 ,200-20) ,
	    cc.TEXT_ALIGNMENT_LEFT);
	this.txtLabel.attr({
            x : 10,
            y : 10,
	    anchorX : 0,
            anchorY : 0,
	});
        this.addChild(this.txtLabel, 5);
        return true;
    },
    setText : function (text) {
	this.txtLabel.setString(text);
    },
});

// ゲームシーン
var gameMainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
	// バック画像
	var layer = new gameMainLayer();
	this.addChild(layer);
	// 会話レイヤ
	var talkLayer = new gameTalkLayer();
	this.addChild(talkLayer);
	// 選択メニューレイヤ
	var selector = getInstanceSelectMenuLayer();
	selector.setCallBackFunction(function (num) {
            cc.log("callback:"+num);
	    selector.setAllVisible(false);
	    layer.setImage(res.BGSchool);
	    talkLayer.setText("3てすと\n4\n5\n6\n");
	});
        this.addChild(selector);
	selector.setAllVisible(true);
	selector.setText(3,"2:てすてす");
//	selector.setVisible(3,true);
    }
});


