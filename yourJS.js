/* Write your canvas JS in this file */

window.onload = function() {
    
    var paper = new Raphael(document.getElementById('canvas'), 500, 500);	// define our canvas element + set size.    
    


    var circleXpos = 100,	// set the horizontal center position of the circle
    	circleYpos = 100,	// set the vertical position of the circle
    	circleRadius = 80,	// set the radius of the circle
    	
    	circle = paper.circle(circleXpos, circleYpos, circleRadius);	// add it all together...

    

    var rectangleTopLeftXPos = 200,	// set the horizontal position of the rectangle (set from top left)
    	rectangleTopLeftYPos = 200,	// set the vertical position of the rectangle (set from top left)
    	rectangleWidth = 250,	// set width of the rectangle
    	rectangleHeight = 100,	// set the height of the rectangle
    	
    	rectangle = paper.rect(rectangleTopLeftXPos, rectangleTopLeftYPos, rectangleWidth, rectangleHeight);  // add it all together...
}