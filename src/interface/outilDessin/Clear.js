let canvasClearButton;

function initialiserCanvasClear() {
	canvasClearButton = document.getElementById("canvasClearButton");
	
	canvasClearButton.addEventListener('click', canvasClear);
}

function canvasClear(){
	tilemap.setDrawingColor(PixelColors.WHITE);
	
	for(let x = 0; x < tilemap.getWidth(); x++) {
		for (let y = 0; y < tilemap.getHeight(); y++) {		
			tilemap.drawPixel(x, y)
		}
	}
	tilemap.draw();
}		


