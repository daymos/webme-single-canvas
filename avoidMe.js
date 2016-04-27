var function pointIntersectElement  (point, element) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var el = document.getElementById(element)
    var cWidth = 250; // these set size of cener area to be avoided
    var cHeight = 250;

    /*
    var titleP1 = [el.offsetLeft, el.offsetTop] //angolo  sinistro alto titolo
    var titleP2 = [el.offsetLeft+cWidth, el.offsetTop]
    var titleP3 = [el.offsetLeft+cWidth , el.offsetTop + cHeight] // angolo destro basso titolo
    var titleP4 = [el.offsetLeft, el.offsetTop+cHeight]
    var corners = [titleP1, titleP2, titleP3, titleP4]
    */

    var titleP1 = [ maxWidth/2 - cWidth , maxHeight/2 - cHeight] //angolo  sinistro alto titolo
    var titleP2 = [ maxWidth/2 + cWidth , maxHeight/2 - cHeight]
    var titleP3 = [ maxWidth/2 + cWidth , maxHeight/2 + cHeight] // angolo destro basso titolo
    var titleP4 = [ maxWidth/2 - cWidth , maxHeight/2 + cHeight]
    var corners = [titleP1, titleP2, titleP3, titleP4]





    
    function inside(point, polygon){
        
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
    }

    return inside(point, corners)

}

  


