//
// 選択メニューの共通処理
//

// 選択メニューのレイヤのインスタンス
var selectMenuLayer = null;

function getInstanceSelectMenuLayer(){
    if (!selectMenuLayer){
	selectMenuLayer= new _selectMenuLayer();
    }
    return selectMenuLayer;
}

var _selectMenuLayer = cc.Layer.extend({
    callback : null,
    buttonList:[],
    maxmenu:5,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.anchorX = 0;
        this.anchorY = 0;

	// ボタン作成
	// ５個固定でいいや
	var menu = new cc.Menu();
	for (var ii=0;ii<this.maxmenu;ii++){
	    // ボタンとテキストラベルを生成する
	    this.buttonList[ii] = this.createSelectButton(ii,this.maxmenu);
	    var bt = this.buttonList[ii].image;  // MenuItemImage
	    var tl = this.buttonList[ii].text;   // テキストラベル
            this.addChild(tl,5);// 5は表示順
	    menu.addChild(bt);
	}
        menu.attr({
            x: 0,
            y: gm.LOC_SELECT_MENU_BANNER_BOTTOM.y,
            anchorX: 0,
            anchorY: 0,
        });
        this.addChild(menu,1);// 1は表示順

        return true;
    },
    setVisible : function (num,f) {
	var bt = this.buttonList[num];
	bt.image.setVisible(f);
	bt.text.setVisible(f);
    },
    setText : function (num,text) {
	var bt = this.buttonList[num];
	bt.text.setString(text);
    },
    setAllVisible : function (f) {
	for (var ii=0;ii<this.buttonList.length;ii++){
	    this.buttonList[ii].image.setVisible(f);
	    this.buttonList[ii].text.setVisible(f);
	}
    },
    setCallBackFunction : function (f){
    	this.callback = f;
    },
    createSelectButton:function(num,max){
	// Button Image
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
            y: gm.SZ_SELECT_MENU_BANNER.y * (max-num-1),
            anchorX: 0,
            anchorY: 0,
        });

	// 文字ラベル
        var txtLabel = new cc.LabelTTF(
	    "1.テストする",
	    "res/fonts/font_1_kokugl_1.15_rls.ttf",
	    gm.FONTSZ_SELECT_MENU,
	    cc.size(
		gm.SZ_SELECT_MENU_BANNER.x - gm.SZ_SELECT_MENU_BANNER_MARGIN.x * 2,
		gm.SZ_SELECT_MENU_BANNER.y - gm.SZ_SELECT_MENU_BANNER_MARGIN.y * 2),
	    cc.TEXT_ALIGNMENT_LEFT);

        txtLabel.x = gm.SZ_SELECT_MENU_BANNER_MARGIN.x;
        txtLabel.y = gm.LOC_SELECT_MENU_BANNER_BOTTOM.y
	    + gm.SZ_SELECT_MENU_BANNER.y * (max-num-1)
	    + gm.SZ_SELECT_MENU_BANNER_MARGIN.y;
        txtLabel.anchorX = 0;
        txtLabel.anchorY = 0;

	return {image:button,text:txtLabel};
    },
});
