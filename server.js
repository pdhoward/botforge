//   conversational agent prototype

const path = 						require('path')
const http = 						require('http')
const {rndr} = 					require('./routes')
const host = 'localhost'
const port = '3000'

// The routes object holds the paths
const routes = {
	'/': (req, res) => rndr({
		filename: path.resolve(__dirname, 'index.html'),
		contentType: 'text/html'
	}, res),
	'/css/page.css': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/page.css'),
		contentType: 'text/css'
	}, res),
	'/css/jquery-ui.min.css': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/jquery-ui.min.css'),
		contentType: 'text/css'
	}, res),
	'/css/viz.css': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/viz.css'),
		contentType: 'text/css'
	}, res),
	'/css/chat.css': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/chat.css'),
		contentType: 'text/css'
	}, res),
	'/js/app.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/app.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/vendor/jquery-3.2.1.min.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/vendor/jquery-3.2.1.min.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/vendor/jquery-ui.min.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/vendor/jquery-ui.min.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/bots.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/bots.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/editor.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/editor.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/blackboard2.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/blackboard2.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/parsingDiagrams.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/parsingDiagrams.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/chat.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/chat.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/io.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/io.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/map.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/map.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/pointer.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/pointer.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/viz.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/viz.js'),
		contentType: 'application/javascript'
	}, res),
	'/js/controls.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'js/controls.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/amIPsychic.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/amIPsychic.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/besties.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/besties.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/emotionFlow.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/emotionFlow.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/kittens.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/kittens.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/maraudersMap.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/maraudersMap.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/petSim.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/petSim.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/quiz.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/quiz.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/rhymes.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/rhymes.js'),
		contentType: 'application/javascript'
	}, res),
	'/bots/tesla.js': (req, res) => rndr({
		filename: path.resolve(__dirname, 'bots/tesla.js'),
		contentType: 'application/javascript'
	}, res),
	'/css/images/ui-icons_444444_256x240.png': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/images/ui-icons_444444_256x240.png'),
		contentType: 'image/gif'
	}, res),
	'/css/images/ui-icons_555555_256x240.png': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/images/ui-icons_555555_256x240.png'),
		contentType: 'image/gif'
	}, res),
	'/css/images/ui-icons_777620_256x240.png': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/images/ui-icons_777620_256x240.png'),
		contentType: 'image/gif'
	}, res),
	'/css/images/ui-icons_cc0000_256x240.png': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/images/ui-icons_cc0000_256x240.png'),
		contentType: 'image/gif'
	}, res),
	'/css/images/ui-icons_ffffff_256x240.png': (req, res) => rndr({
		filename: path.resolve(__dirname, 'css/images/ui-icons_ffffff_256x240.png'),
		contentType: 'image/gif'
	}, res)

}

// The server parses an incoming http message and attempts to resolve
// the path. If found, the respective route is executed
const server = http.createServer((req, res) => {
	const url = require('url').parse(req.url);

	if (routes[url.path]) return routes[url.path](req, res);

	// refactor string to remove query parms inserted by ajax
	// and test 1 more time for match in route object
	url.path = url.path.substring(0, url.path.indexOf('?'))
	if (routes[url.path]) return routes[url.path](req, res);

	res.writeHead(404, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({
		response: 'failed',
		data: null,
		message: 'resource not found'
	}))
})

server.listen(port, host, () => {
	console.log(`server started: http://${host}:${port}`);
});
