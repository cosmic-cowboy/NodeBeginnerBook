// 基本的なHTTPサーバ

// httpモジュールを読み込む（Node.jsに同梱されている）
var http = require("http");
var url = require("url");

function start(route, handle){
	// レスポンス処理を切り出す
	function onRequest(req, res){

		var pathname = url.parse(req.url).pathname;
		console.log("Request for '" + pathname + "' received.");
		route(handle, pathname, res, req);
	}

	// createServerでオブジェクトを呼び出す
	// 呼び出されたオブジェクトのlisten()でサーバーを起動する
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

