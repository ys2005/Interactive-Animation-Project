function preload() {
	OMG = loadImage("HowieMandelOMG.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255); //background starts out white
	frameRate(20);
}

function draw() {
	image(OMG, 0, 0, 3 / 4 * OMG.width, 3 / 4 * OMG.height); //GIF is in the top left corner of the screen, 3/4 of original size

	print("Press down on your mouse and drag it around to see how the circles and squares follow it in a trail! To restart, click on any key, and the screen will be wiped with the background colour changed!")

	textSize(25);
	textAlign(RIGHT, BOTTOM); //text is in the bottom right of the screen
	fill(0); //text is black
	text("Yashika", windowWidth, windowHeight);

	if (mouseIsPressed) {
		fill(int(random(256)), int(random(256)), int(random(256))); //shape colours are random
		let x = [10, 20, 30, 40, 50]; //system randomly picks size within given options

		stroke(128, 0, 128); //stroke colour is purple
		strokeWeight(1);
		ellipse(mouseX, mouseY, random(x));

		stroke(0, 0, 255); //stroke colour is blue
		strokeWeight(3);
		rect(mouseX, mouseY, random(x)); //square is drawn because x is the same number 
	}

	if (keyIsPressed) {
		background(int(random(256)), int(random(256)), int(random(256))); //if key is pressed, screen is wiped and background colour is random 
	}
}
