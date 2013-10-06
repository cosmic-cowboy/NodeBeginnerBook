// vol.1 基本的なHTTPサーバ

// httpモジュールを読み込む（Node.jsに同梱されている）
var http = require("http");

// レスポンス処理を切り出す
function onRequest(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello, World");
	res.end();
}

// createServerでオブジェクトを呼び出す
// 呼び出されたオブジェクトのlisten()でサーバーを起動する
http.createServer(onRequest).listen(8888);