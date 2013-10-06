// リクエストハンドラ

var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(res, req){
	console.log("Request handler 'start' was called.");

	var body ='<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload">'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';


	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(body);
	res.end();
}

function upload(res, req){
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(req, function(error, fields, files) {
		console.log("parsing done");

		/* Possible error on Windows systems:
		tried to rename to an already existing file */
		fs.rename(files.upload.path, "tmp/test.png", function(err) {
			if (err) {
				fs.unlink("tmp/test.png");
				fs.rename(files.upload.path, "tmp/test.png");
			}
		});
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("received image:<br/>");
		res.write("<img src='/show' />");
		res.end();
	});
}

function show(res, req){
	console.log("Request handler 'show' was called.");
	fs.readFile("tmp/test.jpeg","binary",function(error, file){
		if(error){
			res.writeHead(500,{"Content-Type":"text/plain"});
			res.write(error +"\n");
			res.end();
		}else{
			res.writeHead(200,{"Content-Type":"image/jpeg"});
			res.write(file,"binary");
			res.end();
		}
	});
}
exports.start = start;
exports.upload = upload;
exports.show = show;
