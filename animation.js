
setInterval(draw,5,canvas,'1.5ch');

function draw(canvas,size){
		var offX = 800,offY = 80 // use this to control collision free area around moving text
		var position = randomize()
		//console.log("is intercepting something?: ",positionActive(position) )
		if (document.getElementById('title') != null){
		while(pointIntersectElement(position,'index') ){position = randomize(); console.log("avoiding title")}
		}else{
			while(pointIntersectElement(position,'me') ){position = randomize(); console.log("avoiding title")}
		

		}






		if(positionActive(position)){console.log("aborting due to overlapping") ;return null}
		else{
		
		if(position[0]< 20 || position[0]> maxWidth-150 || position[1]<10 || position[1]> maxHeight-20) {console.log("aborted"); return null}
		

		activeAreas[position] = [[position[0]-200,position[1]+60],
								[position[0]-200+offX,position[1]+60],
								[position[0]-200+offX,position[1]+60-offY],
								[position[0]-200,position[1]+60-offY]] 


		//while(positionActive(position)) { position = randomize(); console.log("intersecting")}
		
		
		
		var movement = delta()
		var ctx = canvas.getContext('2d');

    	fadeInOut(canvas,randomText(),size,position,movement)
    	console.log(Object.keys(activeAreas).length)
    }
    
    

}

//helper functions


function farFromBorder(position){

	if(position[0] >= maxWidth - 1000 && position[0] <= 400) {return false}
	else return true
}

function positionActive(position){

	for ( var i in activeAreas){
	 if (inside(position,activeAreas[i])) return true
	}
return false

	function inside (point, polygon) {
	    
	    var x = point[0], y = point[1];
	    
	    var inside = false;
	    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
	        var xi = polygon[i][0], yi = polygon[i][1];
	        var xj = polygon[j][0], yj = polygon[j][1];
	        
	        var intersect = ((yi > y) != (yj > y))
	            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
	        if (intersect) inside = !inside;
	    }
	  
	    return inside
	};






}

function fadeInOut(canvas,text, size, position, movement) {
	
    var alpha = 0.0
    var peaked = false
    var context = canvas.getContext('2d');
    var txt = randomText()
   	var newPosition = [position[0],position[1]]
  
    var interval = setInterval(function () {
        	newPosition[0] += movement[0]

        	if(!peaked){
        		alpha = alpha + 0.03;
            	
            	context.clearRect(newPosition[0]-20,newPosition[1]-20,txt[0].join("").length*8,30);
				
            
            	context.clearRect(newPosition[0]-20,newPosition[1]-20,txt[0].join("").length*8,30);
            	letters(txt,context,alpha,size,newPosition) //draws
            	if(~~alpha >= 1) peaked = true;
        	}
            else{ 
            	
            	context.clearRect(newPosition[0]-20,newPosition[1]-20,txt[0].join("").length*8,30);
            	alpha = alpha - 0.04; // decrease opacity (fade out)
             	letters(txt,context,alpha,size,newPosition) //draws          	
            	if (alpha <= 0) {
                	delete activeAreas[position]
                	context.clearRect(newPosition[0]-20,newPosition[1]-20,txt[0].join("").length*8,30);
                	clearInterval(interval);
            	}
            }
        }, 50); 
}


function randomize(){
	var a = ~~(Math.random()*maxWidth)
	var b = ~~(Math.random()*maxHeight)
	
	return [a,b]
}


function letters(txt,context,alpha,size, newPosition){
	var arrayTxt = txt[0]
	var arrayColor = txt[1]
	
	var relPos = 0;
	for(var i = 0; i< arrayTxt.length;i++){
		context.fillStyle = hexToRGBA(colors[arrayColor[i]],alpha)
        context.font = size+" arial";
        context.fillText(arrayTxt[i], newPosition[0]+ relPos,newPosition[1]);
        var measureObj = context.measureText(arrayTxt[i])
        relPos += measureObj.width
	}

}



function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(opacity||1).join(',') + ')';
}


function randomText(){
	text = [
			[['var ','a,b,c'],['violet','white']],
			[['if','( ','!','peaked ) ','{','return ~~ -','1','}'],['pink','white','pink','white','white','pink','violet','white']],
			[['function ','hexRgba','( ','hex',', ','a',')'],['blue','green','white','orange','white','orange','white']],
			[['console','.','log','( this )'],['violet','pink','violet','white']],
			[['var ', 'cWidth', '=', '200',';'],['violet','white','pink','violet','white']],
			[['array','.sort','((','a',',','b',')','=> ','{','return ','a','-','b})'],['white','blue','white','orange','white','orange','white','blue','white','pink','white','pink','white']],
			[[],[]]
	]

	return text[~~(text.length*Math.random())]
}


function move(startingPoint,lineParams){
	var newX = startingPoint[0]+1
	var newY = lineParams[0]*newX + lineParams[1]
}


// constants

var colors = {
	blue:'#4ec4eb',
	green:'#a6e22e',
	orange:'#fd9720',
	violet:'#ae81ff',
	pink:'#f92672',
	yellow:'#d7db74',
	white:'#FFFFFF'
}

