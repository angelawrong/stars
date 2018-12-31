var cloud01;
var cloud02;
var cloud03;
var cloud04;
var cloud05;
var cloud06;
var cloud07;
var cloud08;
var cloud09;
var cloud10;
var girls

var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var n6 = 0;
var n7 = 0;
var n8 = 0;
var n9 = 0;
var n10 = 0;
var n11 = 0;
var n12 = 0;
var n13 = 0;
var n14 = 0;
var n15 = 0;
var n16 = 0;
var n17 = 0;
var n18 = 0;
var n19 = 0;
var n20 = 0;
var n21 = 0;
var n22 = 0;
var n23 = 0;
var n24 = 0;
var n25 = 0;
var n26 = 0;
var n27 = 0;
var n28 = 0;
var n29 = 0;
var n30 = 0;
var n31 = 0;
var n32 = 0;
var n33 = 0;

var xMax = 1375;
var xMin = 0;
var yMax = 1375*sqrt(3);
var yMin = 0;
var speedMax = 2;
var speedMin = 1;


function preload() {
	cloud01 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud01.png');
	cloud02 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud02.png');
	cloud03 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud03.png');
	cloud04 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud04.png');
	cloud05 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud05.png');
	cloud06 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud06.png');
	cloud07 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud07.png');
	cloud08 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud08.png');
	cloud09 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud09.png');
	cloud10 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud10.png');
	cloudFill01 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud01_fill.png');
	cloudFill02 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud02_fill.png');
	cloudFill03 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud03_fill.png');
	cloudFill04 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud04_fill.png');
	cloudFill05 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud05_fill.png');
	cloudFill06 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud06_fill.png');
	cloudFill07 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud07_fill.png');
	cloudFill08 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud08_fill.png');
	cloudFill09 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud09_fill.png');
	cloudFill10 = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/cloud10_fill.png');
	girls = loadImage('https://raw.githubusercontent.com/angelawrong/stars/master/girls.png');
	
}
function setup() {
	colorMode(HSB, 360, 100, 100, 1);
	createCanvas(800, 1150);
	background(0, 0, 0, 1);
	frameRate(24);
	angleMode(DEGREES);
	n1 = random(xMin, xMax);
	n2 = random(xMin, xMax);
	n3 = random(xMin, xMax);
	n4 = random(xMin, xMax);
	n5 = random(xMin, xMax);
	n6 = random(xMin, xMax);
	n7 = random(xMin, xMax);
	n8 = random(xMin, xMax);
	n9 = random(xMin, xMax);
	n10 = random(xMin, xMax);
	
	n11 = random(yMin, yMax);
	n12 = random(xMin, xMax);
	n13 = random(xMin, xMax);
	n14 = random(xMin, xMax);
	n15 = random(xMin, xMax);
	n16 = random(xMin, xMax);
	n17 = random(xMin, xMax);
	n18 = random(xMin, xMax);
	n19 = random(xMin, xMax);
	n20 = random(xMin, xMax);
	
	n21 = random(0.5, 1.5);
	n22 = random(0.5, 1.5);
	n23 = random(0.5, 1.5);
	
	n24 = random(800);
	n25 = random(200);
	n26 = random(800);
	n27 = random(300);
	n28 = random(800);
	n29 = random(400);
	n30 = random(800);
	n31 = random(400);
	n32 = random(800);
	n33 = random(400);

}


function draw(){
	
	createCanvas(800, 1150);
	background(0, 0, 0, 1);
	angleMode(DEGREES);
	stroke(0, 0, 100, 1);
	noFill();
	rect(0, 0, 799, 799);
	
	fill(0, 0, 100, 1);
	
	var time = (millis()+5000)/10;
	var timeCeil = ceil(time)/100;
	var timeCeil2 = ceil(time+1000)/100;
	var timeCeil3 = ceil(time+3000)/100;
	var timeCeil4 = ceil(time+4000)/100;
	var timeCeil5 = ceil(time+5000)/100;
	
	
	
	noStroke();
	light1 = color(0, 0, 100, noise(timeCeil));
	light2 = color(0, 0, 100, noise(timeCeil2));
	light3 = color(0, 0, 100, noise(timeCeil3));
	light4 = color(0, 0, 100, noise(timeCeil4));
	light5 = color(0, 0, 100, noise(timeCeil5));
	
	fill(light1);
	ellipse(n24, n25, 5);
	fill(light2);
	ellipse(n26, n27, 6);
	fill(light3);
	ellipse(n28, n29, 6);
	fill(light4);
	ellipse(n30, n31, 7);
	fill(light5);
	ellipse(n32, n33, 7);
	
	image(cloudFill01, (n1 + time*n21)%1375-825, (n11 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill02, (n2 + time*n22)%1375-825, (n12 - time*n22*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill03, (n3 + time*n23)%1375-825, (n13 - time*n23*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill04, (n4 + time*n21)%1375-825, (n14 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill05, (n5 + time*n22)%1375-825, (n15 - time*n22*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill06, (n6 + time*n23)%1375-825, (n16 - time*n23*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill07, (n7 + time*n21)%1375-825, (n17 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill08, (n8 + time*n22)%1375-825, (n18 - time*n22*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill09, (n9 + time*n23)%1375-825, (n19 - time*n23*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloudFill10, (n10 + time*n21)%1375-825, (n20 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	
	image(cloud01, (n1 + time*n21)%1375-825, (n11 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud02, (n2 + time*n22)%1375-825, (n12 - time*n22*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud03, (n3 + time*n23)%1375-825, (n13 - time*n23*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud04, (n4 + time*n21)%1375-825, (n14 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud05, (n5 + time*n22)%1375-825, (n15 - time*n22*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud06, (n6 + time*n23)%1375-825, (n16 - time*n23*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud07, (n7 + time*n21)%1375-825, (n17 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud08, (n8 + time*n22)%1375-825, (n18 - time*n22*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud09, (n9 + time*n23)%1375-825, (n19 - time*n23*sqrt(3))%(1375*sqrt(3))+1000);
	image(cloud10, (n10 + time*n21)%1375-825, (n20 - time*n21*sqrt(3))%(1375*sqrt(3))+1000);
	image(girls, 0, 0);
	
	fill('#0C0C0C');
	
	rect(0, 800, 800, 400);
	
	fill(0, 0, 100, 1);
	textSize(16);
	textAlign(LEFT);
	
	text('「呀！」', 0, 900, 800);
	
	textAlign(RIGHT);
	text('「？」', 10, 940, 800);
	textAlign(LEFT);
	text('「就像看星一樣……', 0, 980, 800);
	text('明知道世界上看星最佳的地方多着，', 10, 1020, 800);
	text('但不代表我就不能喜歡在這片天空裏發現躲在雲後僅餘的星。」', 10, 1060, 800);
	textAlign(RIGHT);
	text('「哈哈，自我安慰！」', 10, 1100, 800);



}

function mouseReleased(){
	
	n1 = random(xMin, xMax);
	n2 = random(xMin, xMax);
	n3 = random(xMin, xMax);
	n4 = random(xMin, xMax);
	n5 = random(xMin, xMax);
	n6 = random(xMin, xMax);
	n7 = random(xMin, xMax);
	n8 = random(xMin, xMax);
	n9 = random(xMin, xMax);
	n10 = random(xMin, xMax);
	
	n11 = random(yMin, yMax);
	n12 = random(xMin, xMax);
	n13 = random(xMin, xMax);
	n14 = random(xMin, xMax);
	n15 = random(xMin, xMax);
	n16 = random(xMin, xMax);
	n17 = random(xMin, xMax);
	n18 = random(xMin, xMax);
	n19 = random(xMin, xMax);
	n20 = random(xMin, xMax);
	
	n21 = random(0.5, 1.5);
	n22 = random(0.5, 1.5);
	n23 = random(0.5, 1.5);
	
	n24 = random(800);
	n25 = random(200);
	n26 = random(800);
	n27 = random(300);
	n28 = random(800);
	n29 = random(400);
	n30 = random(800);
	n31 = random(400);
	n32 = random(800);
	n33 = random(400);

}

