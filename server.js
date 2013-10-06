// vol.1 基本的なHTTPサーバ

// httpモジュールを読み込む（Node.jsに同梱されている）
var http = require("http");

// createServerでオブジェクトを呼び出す
// 呼び出されたオブジェクトのlisten()でサーバーを起動する
http.createServer(function(req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello, World");
	res.end();
}).listen(8888);