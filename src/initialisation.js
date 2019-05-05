let canvas;
let tilemap;

// Louis et Maxence
window.onload = function() {
	initialiserInterfaces();
	initialiserTilemap();
	initialiserCanvas();
	tilemap.draw();
};

// Louis et Maxence 
function initialiserInterfaces() {
	initialiserInterfaceDimensionsCanvas();
	initialiserInterfaceDimensionsTilemap();
	initialiserCouleurInterface();
	initialiserCanvasClear();
	initialiserCanvasFill();
}

// Louis
function initialiserCanvas() {
	canvas = document.getElementById("ecran");
	canvas.addEventListener('click', canvasClickListener);
	setTargetContext(canvas.getContext("2d"));
	background(new Color(0));
}

// Louis
function canvasClickListener(evt) {
	let rectangle = evt.target.getBoundingClientRect();
	let positionOnCanvas = new Vector(evt.clientX - rectangle.left, evt.clientY - rectangle.top);

	let positionOnTilemap = tilemap.getPixelPositionByCanvas(positionOnCanvas.x, positionOnCanvas.y, canvas.width, canvas.height);

	tilemap.drawPixel(positionOnTilemap.x, positionOnTilemap.y);
	tilemap.draw();
}

