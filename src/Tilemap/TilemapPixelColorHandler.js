/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *	Auteur: Louis 
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
*/

'use strict';

class TilemapPixelColorHandler {
	constructor(tilemap) {
		this.drawingColor = PixelColors.BLACK;
		this.cleaningColor = PixelColors.WHITE;

		this.pixelColors = [];
		this.initPreselectionColors();
	}

	initPreselectionColors() {
		this.addColor(new Color(100)); // PixelColors.WHITE
		this.addColor(new Color(0)); // PixelColors.BLACK
		this.addColor(new Color(52, 52, 255)); // PixelColors.BLUE
		this.addColor(new Color(52, 255, 52)); // PixelColors.GREEN
		this.addColor(new Color(255, 52, 52)); // PixelColors.RED
		this.addColor(new Color(255, 255, 52)); // PixelColors.YELLOW
	}

	addColor(color) {
		this.pixelColors.push(color);
	}

	getPixelColor(pixelColorId) {
		if(pixelColorId >= this.pixelColors.length)
			return error('this.drawingColor has a wrong value!', new Color(255));
		return this.pixelColors[pixelColorId];
	}

	getLastColorId() {
		return this.pixelColors.length - 1;
	}
}

