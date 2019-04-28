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
	constructor() {
		this.drawingColor = PixelColors.BLACK;
		this.cleaningColor = PixelColors.WHITE;
	}

	getPixelColor(pixelColor) {
		switch(pixelColor) {
			case PixelColors.WHITE:
				return new Color(100);
			case PixelColors.BLACK:
				return new Color(0);
			case PixelColors.BLUE: 
				return new Color(52, 52, 255);
			case PixelColors.GREEN:
				return new Color(52, 255, 52);
			case PixelColors.RED:
				return new Color(255, 52, 52);
			case PixelColors.YELLOW:
				return new Color(255, 255, 52);
			default:
				return error("this.drawingColor has a wrong value!", new Color(255));
		}
	}
}

