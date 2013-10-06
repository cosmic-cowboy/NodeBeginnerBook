// サーバモジュールを呼び出す
var server = require("./server");
var router = require("./router");

// exportされた関数を使う
server.start(router.route);