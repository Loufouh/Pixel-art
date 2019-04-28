/*
 *
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

class TilemapPositionCalculator {
	constructor(tilemap) {
		this.tilemap = tilemap;
	}

	getIndex(x, y) {
		if(this.isGetIndexParametersIncorrect(x, y))
			return 0;

		return y*this.tilemap.getWidth() + x;
	}
	
	getPixelPositionByCanvas(x, y, canvasWidth, canvasHeight) {
		if(this.isGetPixelPositionByCanvasParametersIncorrect(x, y, canvasWidth, canvasHeight))
			return new Vector(0, 0);
	
		let xScale = canvasWidth/this.tilemap.getWidth();
		let yScale = canvasHeight/this.tilemap.getHeight();
	
		return new Vector( Math.floor(x/xScale),
				   Math.floor(y/yScale) );
	}

	isGetIndexParametersIncorrect(x, y) {
		if(x < 0 || x >= this.tilemap.getWidth())
			return error("x has a wrong value ! (" + x + ")", true, console.warn);
		if(y < 0 || y >= this.tilemap.getHeight())
			return error("y has a wrong value ! (" + y + ")", true, console.warn);

		return false;
	}

	isGetPixelPositionByCanvasParametersIncorrect(x, y, canvasWidth, canvasHeight) {
		if(this.tilemap.getData().length <= 0)
			return error("There's no content in the this.tilemap.", true, console.warn);
		if(x < 0 || x >= canvasWidth)
			return error("x has a wrong value ! (" + x + ")", true, console.warn);
		if(y < 0 || y >= canvasHeight)
			return error("y has a wrong value ! (" + y + ")", true, console.warn);

		return false;
	}
}
