// リクエストルータ
// ブラウザがリクエストしてきたURLパスを出力

function route(handle, pathname){
	console.log("About to route a request for "+ pathname);

	// パス名に対応するリクエストハンドラが存在するかどうかをチェック
	// 存在する場合は、紐付けられた関数を呼び出す
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname);
		return "404 Not found";
	}
}

exports.route = route;