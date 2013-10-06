// vol.1 基本的なHTTPサーバ
// vol.2 リクエストを”ルーティング”

// httpモジュールを読み込む（Node.jsに同梱されている）
var http = require("http");
var url = require("url");

function start(){
	// レスポンス処理を切り出す
	function onRequest(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log("Request for '" + pathname + "' received.");
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write("Hello, World");
		res.end();
	}

	// createServerでオブジェクトを呼び出す
	// 呼び出されたオブジェクトのlisten()でサーバーを起動する
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

