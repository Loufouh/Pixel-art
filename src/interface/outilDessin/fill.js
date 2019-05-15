let canvasFillButton;

function initialiserFillSprite(){
	canvasFillButton = document.getElementById("canvasFillButton");
	
	canvasFillButton.addEventListener('click', fillSprite);
}

function fillSprite(){
	for(let x = 0; x < sprite.getWidth(); x++) {
		for (let y = 0; y < sprite.getHeight(); y++) {		
			sprite.drawPixel(x, y)
		}
	}
	sprite.draw();
}
	
