'use strict';

class TilemapDrawer {
	constructor(tilemap) {
		this.tilemap = tilemap;
	}

	// auteurs: Louis et Maxence
	draw() {
		let largeurPixel = canvas.width/this.tilemap.getWidth();
		let hauteurPixel = canvas.height/this.tilemap.getHeight();
		
		for(let x = 0; x < this.tilemap.getWidth(); x++) {
			for (let y = 0; y < this.tilemap.getHeight(); y++) {
				stroke(new Color(255));
				fill(this.tilemap.getPixelColor(this.tilemap.getData()[this.tilemap.getIndex(x, y)]));

				rect(x*largeurPixel, y*hauteurPixel, largeurPixel, hauteurPixel);
			}
		}
	}
}	
