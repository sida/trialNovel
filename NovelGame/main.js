/**
 * A brief explanation for "project.json":
 * Here is the content of project.json file, this is the global configuration for your game, you can modify it to customize some behavior.
 * The detail of each field is under it.
 {
    "project_type": "javascript",
    // "project_type" indicate the program language of your project, you can ignore this field

    "debugMode"     : 6,
    // "debugMode" possible values :
    //      0 - No message will be printed.
    //      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
    //      2 - cc.error, cc.assert, cc.warn will print in console.
    //      3 - cc.error, cc.assert will print in console.
    //      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
    //      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
    //      6 - cc.error, cc.assert will print on canvas, available only on web.

    "showFPS"       : true,
    // Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.

    "frameRate"     : 60,
    // "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.

    "id"            : "gameCanvas",
    // "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.

    "renderMode"    : 0,
    // "renderMode" sets the renderer type, only useful on web :
    //      0 - Automatically chosen by engine
    //      1 - Forced to use canvas renderer
    //      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers

    "engineDir"     : "frameworks/cocos2d-html5/",
    // In debug mode, if you use the whole engine to develop your game, you should specify its relative path with "engineDir",
    // but if you are using a single engine file, you can ignore it.

    "modules"       : ["cocos2d"],
    // "modules" defines which modules you will need in your game, it's useful only on web,
    // using this can greatly reduce your game's resource size, and the cocos console tool can package your game with only the modules you set.
    // For details about modules definitions, you can refer to "../../frameworks/cocos2d-html5/modulesConfig.json".

    "jsList"        : [
    ]
    // "jsList" sets the list of js files in your game.
 }
 *
 */

cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources

    cc._loaderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OEVBQzhCM0MyMEExMUUyQjlCQkQ4Mjc5ODJGNTExMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OEVBQzhCMkMyMEExMUUyQjlCQkQ4Mjc5ODJGNTExMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NTkwNUJCMEVCQkUyMTFCRUVEODNFNjVDNDQ0RTVCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+U7q3HgAAAxpJREFUeNrsmGtozWEcx//HhmE0hs1cGkKSWeRSrivywqi5vCLvvOGV2wt54RKLkpJSakWyKElIjRekXDISLzZSY+LMttMw25hmju9T36e+Hud/ds52sNr/V5+e2//y/f9+v+dyTigajXq92fp5vdwCgYHAQGAgsK8L9MxOkqLdJF3qO0FGSnSlSGAROCbtMFjC+kiwvrsCexLiRVJfBpayngPywGy2i8H2f52DaeA6KGR7FigAITCRffks51Fsf7nfXJP1NwUW8gVFbI8FA8Boes/2GZvMfLTtw+A1eAf28L6EBJaBV2BxAgKnsZzqiDFlLuujWI6TsTQJdyYoBY/BjEQEmpdNAXfAXoZLzST6ASd8k1hmsxwBhkndE8Fj+GGDnOea1HgE1nUl8L7k1yFwznH/LrCDfTnipXS5bgjxREgmy8EUE8vMPZfAlngC7zpjm8BFvtwwhy8rEO9kiyD7IitsICeGis+LkzYmYqfBRj+BJrSfnZtKwAkwQRbi+RK24WCts/QUyPq3QMayJFet1YMqR2TZb552FuozpisGNT79ydAGvkm7nvlqRF11rr3tt1DX+bi/NQVb4ReK1HYLBYWda3P9PPgyxpffA9OlvRlcY70ZrJAxs8ZdZr2Va6AdM2vecefZFQxph/T9BKusLt3g58r6Zu0F87CdN5twvAEfOW7KSrm+WiaJyeeIjJlnNDjPXxnD02YpuxFrkhQ7Fz4Hy/mSFi7ineAZ2zZM7Y6I76x3cNxaG/Munp0CB/1m8UKpV3BH0Zw8C65QXBP7migoKgKbWdePsB6t8ju8gH1gmzzrjzNcBr96PzjCXFA7ykXcWC3Ltywj3IcjnKmeTIgGztZGCuyU59gP2ArKu9pJVnMLK40hzn7lD9ZrnPKDrAJ1Tl9Yxoz4W/JMeyIqT+QU/IkkYk8Y2koRM5PeahTPWS8br71newNYwyg8TOaYnowZT+zm7uMxdPlMESvElk95Hvwqob/Qnd8RydpJqT+Q/bmWIqrZvgmG/u8fTeZQMF7a50Vwj3SFgv8HA4GBwEBgHxf4S4ABADT8D0N+XmTiAAAAAElFTkSuQmCC";

    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new OpeningScene());
    }, this);
};
cc.game.run();

