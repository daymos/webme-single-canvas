
var maxWidth = document.getElementById('leftbox').offsetWidth
var maxHeight = document.getElementById('container').offsetHeight
var canvas = document.createElement('canvas');
//var title = document.getElementById(element)

var activeAreas = {};

canvas.width  = maxWidth;
canvas.height = maxHeight;
canvas.style.zIndex   = -1;
canvas.style.position = "absolute";
canvas.style.border   = "1px solid red";
canvas.style.backgroundColor = "#272822"


document.getElementById('leftbox').insertBefore(canvas, document.getElementById('leftbox').firstChild);

	
