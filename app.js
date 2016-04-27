var http = require("http");
var port = process.env.PORT || 9000;
var fs = require('fs');
var stylesheet = fs.readFileSync('./style.css');
var index = fs.readFileSync('./index.html');
var generateCanvas = fs.readFileSync('./generateCanvas.js');
var animation = fs.readFileSync('./animation.js');
var delta = fs.readFileSync('./delta.js');
var avoid = fs.readFileSync('./avoid.js');
var me = fs.readFileSync('./me.html');
var avoidMe = fs.readFileSync('./avoidMe.js');

function handler(request, response){
  var url = request.url;
  console.log(url);
  if(url === '/style.css'){
    response.writeHead(200, {"Content-Type": "text/css"});
    response.end(stylesheet);
    console.log('style.css has been sent');
  }

  else if (url === '/generateCanvas.js'){
    response.writeHead(200, {"Content-Type": "application/javascript"});
    response.end(generateCanvas);
    console.log('generateCanvas.js has been sent');
  }
  else if (url === '/animation.js'){
    response.writeHead(200, {"Content-Type": "application/javascript"});
    response.end(animation);
    console.log('animation.js has been sent');
  }
  else if (url === '/delta.js'){
    response.writeHead(200, {"Content-Type": "application/javascript"});
    response.end(delta);
    console.log('delta.js has been sent');
  }
  else if (url === '/avoid.js'){
    response.writeHead(200, {"Content-Type": "application/javascript"});
    response.end(avoid);
    console.log('animation.js has been sent');
  }
  else if (url === '/me'){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(me);
    console.log('me.html has been sent');
  }
  else if(url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index);
  } else {
    response.end();
  }
}

http.createServer(handler).listen(port);
console.log("Server is listening");
