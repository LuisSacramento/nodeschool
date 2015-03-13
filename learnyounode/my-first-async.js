fs = require('fs');
var fileLines = undefined

function countLines(callback){
	fs.readFile(process.argv[2], function finishReading (err,data){
		fileLines = (data.toString().split("\n").length) - 1
		callback()
	})
}

function logResult(){
	console.log(fileLines)
}

countLines(logResult)