
var OpeningLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);


	// 起動画面
        var openingImage = new cc.MenuItemImage(
            res.OpenTitle,
            res.OpenTitle,
            function () {
                cc.log("clickd title!!!!");
		cc.director.runScene(new gameMainScene());
            }, this
	);
        openingImage.attr({
            x: size.width / 2,
            y: size.height / 2,
        });

        var openTitle = new cc.Menu(openingImage);
        openTitle.x = 0;
        openTitle.y = 0;
        this.addChild(openTitle, 0);

        return true;
    }
});

var OpeningScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new OpeningLayer();
        this.addChild(layer);
    }
});

//-----------------------------------

var gameMainLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

	// 起動画面
        var backImage = new cc.MenuItemImage(
            res.BackGround,
            res.BackGround,
            function () {
                cc.log("clickd title!!!!");
            }, this);
        backImage.attr({
            x: size.width / 2,
            y: size.height / 2,
        });

        var back = new cc.Menu(backImage);
        back.x = 0;
        back.y = 0;
        this.addChild(back, 0);

        return true;
    }
});

var gameTalkLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

	// 文字表示背景
        this.talk = new cc.Sprite(res.TalkWindow);
        this.talk.attr({
            x: size.width / 2,
            y: 100,
        });

	this.talk.setOpacity(230);
        this.addChild(this.talk, 1);

	// 文字ラベル
        var txtLabel = new cc.LabelTTF("test\ntext\nてすと", "res/fonts/font_1_kokugl_1.15_rls.ttf", 20);
        txtLabel.x = 0;
        txtLabel.y = 100;
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
    }
});






