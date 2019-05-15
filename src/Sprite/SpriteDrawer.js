'use strict';

class SpriteDrawer {
	constructor(sprite) {
		this.sprite = sprite;
	}

	// auteurs: Louis et Maxence
	draw() {
		let largeurPixel = canvas.width/this.sprite.getWidth();
		let hauteurPixel = canvas.height/this.sprite.getHeight();
		
		for(let x = 0; x < this.sprite.getWidth(); x++) {
			for (let y = 0; y < this.sprite.getHeight(); y++) {
				stroke(new Color(255));
				fill(this.sprite.getPixelColor(this.sprite.getData()[this.sprite.getIndex(x, y)]));

				rect(x*largeurPixel, y*hauteurPixel, largeurPixel, hauteurPixel);
			}
		}
	}
}	
