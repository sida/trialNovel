
var OpeningLayer = cc.Layer.extend({
    openingImage : null,
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
//            anchorX: 0.5,
//            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);


	// 起動画面
        openingImage = new cc.MenuItemImage(
            res.OpenTitle,
            null,
            function () {
		//openingImage.setEnabled(true);
                cc.log("***clickd title!!!!");
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

