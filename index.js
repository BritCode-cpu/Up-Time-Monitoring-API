/*
* Primary file for API
*
*/

//Dependencies

var http = require('http');
var url = require('url');


//The server shold respond to all requests with a string

var server = http.createServer(function(req,res){
      //Get the URL and parse it
      var parsedUrl = url.parse(req.url,true);

      //Get the path
      var path = parsedUrl.pathname;
      var trimmedPath = path.replace(/^\/+|\/+$/g,'');

      //Send the response
      res.end("The response you get after making a request on port 3000\n");

      //Log the request path
      console.log("The request received on path: "+trimmedPath);

});

  //Start server and have it listen on port 3000

server.listen(3000, function(){
   console.log("App is listening on Port 3000!");
});
