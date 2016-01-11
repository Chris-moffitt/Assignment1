var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server, error;
var requestHandler = function(request, response) {
	var parsedUrl=url.parse(request.url).pathname;
	if (parsedUrl=='/listings'){
		response.end(listingData);
	}
	else{
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("Bad gateway error");
		response.end();
	}

};
fs.readFile('listings.json', 'utf8', function(err, data) {
	listingData=data;
	error=err;
  	server=http.createServer(requestHandler);
	server.listen(port, function() {;
	console.log('Server listening on Port 8080');
	});
});
