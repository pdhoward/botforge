
// render the html file

var fs = require('fs')


exports.rndr = (obj, res) => {

	fs.readFile(obj.filename, function(err, data){
		res.writeHead(200, {'Content-Type':obj.contentType, 'Content-Length': data.length});
		res.write(data)
		res.end()
	})
}
