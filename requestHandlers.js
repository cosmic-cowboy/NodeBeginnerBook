// リクエストハンドラ

function start(){
	console.log("Request handler 'start' was called.");

	// リクエストハンドラにブロッキング
	function sleep(millSecond){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + millSecond);
	}

	sleep(10000);
	return "Hello start";
}

function upload(){
	console.log("Request handler 'upload' was called.");
	return "Hello upload";
}

exports.start = start;
exports.upload = upload;