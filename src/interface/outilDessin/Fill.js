let canvasFillButton;

function initialiserCanvasFill(){
	canvasFillButton = document.getElementById("canvasFillButton");
	
	canvasFillButton.addEventListener('click', canvasFill);
}

function canvasFill(){
	for(let x = 0; x < tilemap.getWidth(); x++) {
		for (let y = 0; y < tilemap.getHeight(); y++) {		
			tilemap.drawPixel(x, y)
		}
	}
	tilemap.draw();
}
	
