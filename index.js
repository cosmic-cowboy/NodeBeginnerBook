// サーバモジュールを呼び出す
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// リクエストハンドラの集合
var handle = [];
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

// exportされた関数を使う
server.start(router.route, handle);