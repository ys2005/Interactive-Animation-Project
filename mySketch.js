function preload() {
	OMG = loadImage("HowieMandelOMG.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255); //background starts out white
	frameRate(20);
	rectMode(CENTER);
}

function keyPressed() {
	if (keyCode == ENTER) { // checks whether the key that was pressed was the enter key
		let rand = int(random(2));
		let width = [10, 25, 50];
		let height = [50, 80, 90];
		fill(int(random(256)), int(random(256)), int(random(256)));
		if (rand == 0) {
			ellipse(int(random(windowWidth + 1)), int(random(windowHeight + 1)), random(width), random(height));
		} else {
			rect(int(random(windowWidth + 1)), int(random(windowHeight + 1)), random(width), random(height));
		}
	}
	if (keyCode == 32) {
		background(int(random(256)), int(random(256)), int(random(256)));
	}
}


function draw() {
	image(OMG, 0, 0, 3 / 4 * OMG.width, 3 / 4 * OMG.height); //GIF is in the top left corner of the screen, 3/4 of original size

	print("Press down on your cursor and drag it around to see how the circles and squares follow it in a trail! To restart, click on the spacebar, and the screen will be wiped with the background colour changed! To see either a circle or rectangle placed upon the screen randomly, click on the enter key!")

	textSize(25);
	textAlign(RIGHT, BOTTOM); //text is in the bottom right of the screen
	fill(0); //text is black
	text("Yashika", windowWidth, windowHeight);

	if (mouseIsPressed) {
		fill(int(random(256)), int(random(256)), int(random(256))); //shape colours are random
		let x = [10, 20, 30, 40, 50]; //system randomly picks size within given options

		if (mouseY <= windowHeight / 2) { // if the cursor is in the top half	
			stroke(128, 0, 128); //stroke colour is purple
			strokeWeight(1);
			ellipse(mouseX, mouseY, random(x));
		} else { // if the cursor is in the bottom half
			stroke(0, 0, 255); //stroke colour is blue
			strokeWeight(3);
			rect(mouseX, mouseY, random(x));
		}

	}

}
