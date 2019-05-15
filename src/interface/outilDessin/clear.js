let canvasClearButton;

function initialiserClearSprite() {
	canvasClearButton = document.getElementById("canvasClearButton");
	
	canvasClearButton.addEventListener('click', clearSprite);
}

function clearSprite(){
	sprite.setDrawingColor(PixelColors.WHITE);
	fillSprite();
}		

