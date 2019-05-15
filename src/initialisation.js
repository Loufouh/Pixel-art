let canvas;
let sprite;

let isDrawing = false;

// Louis et Maxence
window.onload = function() {
	initialiserInterfaces();
	initialiserSprite();
	initialiserCanvas();
	sprite.draw();
};

// Louis et Maxence 
function initialiserInterfaces() {
	initialiserInterfaceDimensionsCanvas();
	initialiserInterfaceDimensionsSprite();
	initialiserCouleurInterface();
	initialiserCouleursPersonnalisees();
	initialiserClearSprite();
	initialiserFillSprite();
}

// Maxence
function initialiserSprite(){
	if(Number(hauteurSpriteInput.value) < 1 || Number(largeurSpriteInput.value) < 1 ){
		sprite = new Sprite(10, 10);
	}
	else{   
		sprite = new Sprite(Number(largeurSpriteInput.value),Number(hauteurSpriteInput.value));
	}
}

// Louis
function initialiserCanvas() {
	canvas = document.getElementById("ecran");

	canvas.addEventListener('mousedown', canvasDrawOnListener);
	document.body.addEventListener('mouseup', canvasDrawOffListener);

	canvas.addEventListener('mousedown', canvasDrawListener);
	canvas.addEventListener('mousemove', canvasDrawListener);

	setTargetContext(canvas.getContext("2d"));
	background(new Color(0));
}

// Louis
function canvasDrawOnListener() {
	isDrawing = true;
}

// Louis
function canvasDrawOffListener() {
	isDrawing = false;
}

// Louis
function canvasDrawListener(evt) {
	if(isDrawing) {
		let rectangle = evt.target.getBoundingClientRect();
		let positionOnCanvas = new Vector(evt.clientX - rectangle.left, evt.clientY - rectangle.top);

		let positionOnSprite = sprite.getPixelPositionByCanvas(positionOnCanvas.x, positionOnCanvas.y, canvas.width, canvas.height);

		sprite.drawPixel(positionOnSprite.x, positionOnSprite.y);
		sprite.draw();
	}
}

