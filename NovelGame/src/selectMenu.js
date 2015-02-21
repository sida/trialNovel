//
// 選択メニューの共通処理
//

// 選択メニューのレイヤのインスタンス
var selectMenuLayer = null;

function getInstanceSelectMenuLayer(){
    cc.log("getInstanceSelectMenuLayer");

    if (!selectMenuLayer){
	cc.log("new SelectMenuLayer");
	selectMenuLayer= new _selectMenuLayer();
    }
    return selectMenuLayer;
}

var _selectMenuLayer = cc.Layer.extend({
    callback : null,
    buttonList:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.anchorX = 0;
        this.anchorY = 0;

	// ボタン作成
	// ５個固定でいいや
	var menu = new cc.Menu();
	for (var ii=0;ii<5;ii++){
	    this.buttonList[ii] = this.createSelectButton(ii,5);
	    menu.addChild(this.buttonList[ii]);
	}
        menu.attr({
            x: 0,
            y: LOC_SELECT_MENU_BANNER_BOTTOM.y,
            anchorX: 0,
            anchorY: 0,
        });
        this.addChild(menu, 1);

/*
	var menuStr = new MenuStr();
	for (var ii=0;ii<5;ii++){
	    this.buttonList[ii] = this.createSelectButtonStr(ii,5);
	    menu.addChild(this.buttonListStr[ii]);
	}
        menuStr.attr({
            x: 0,
            y: LOC_SELECT_MENU_BANNER_BOTTOM.y,
            anchorX: 0,
            anchorY: 0,
        });
        this.addChild(menuStr, 1);
*/

	// // 文字ラベル
        // var txtLabel = new cc.LabelTTF("1test\n2text\n3てすと\n4\n5\n6\n"
	// 	 ,"res/fonts/font_1_kokugl_1.15_rls.ttf", 20
	// 	 ,cc.size(480,200),cc.TEXT_ALIGNMENT_RIGHT);

        // txtLabel.x = 0;
        // txtLabel.y = 0;
        // txtLabel.anchorX = 0;
        // txtLabel.anchorY = 0;

        // this.addChild(txtLabel, 5);



        return true;
    },
    setMenu:function (){
	// 非表示に
	this.setAllVisible(false);
    },
    setVisible : function (num,f) {
	var bt = this.buttonList[num];
	bt.setVisible(f);
    },
    setAllVisible : function (f) {
	for (var ii=0;ii<this.buttonList.length;ii++){
	    var bt = this.buttonList[ii];
	    bt.setVisible(f);
	}
    },
    setCallBackFunction : function (f){
    	this.callback = f;
    },
    createSelectButton:function(num,max){
        var button = new cc.MenuItemImage(
            res.CommonSelectButton,
            res.CommonSelectButtonOff,
            function () {
		cc.log(num + "*select button is clicked!");
		if (this.callback){
		    this.callback(num);
		}
            }, this);
        button.attr({
            x: 0,
            y: SZ_SELECT_MENU_BANNER.y * (max-num-1),
            anchorX: 0,
            anchorY: 0,
        });
	return button;
    },
    getResult:function (){
	return selectedMenuNo;
    }
});
