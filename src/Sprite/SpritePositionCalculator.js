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

class SpritePositionCalculator {
	constructor(sprite) {
		this.sprite = sprite;
	}

	getIndex(x, y) {
		if(this.isGetIndexParametersIncorrect(x, y))
			return 0;

		return y*this.sprite.getWidth() + x;
	}
	
	getPixelPositionByCanvas(x, y, canvasWidth, canvasHeight) {
		if(this.isGetPixelPositionByCanvasParametersIncorrect(x, y, canvasWidth, canvasHeight))
			return new Vector(0, 0);
	
		let xScale = canvasWidth/this.sprite.getWidth();
		let yScale = canvasHeight/this.sprite.getHeight();
	
		return new Vector( Math.floor(x/xScale),
				   Math.floor(y/yScale) );
	}

	isGetIndexParametersIncorrect(x, y) {
		if(x < 0 || x >= this.sprite.getWidth())
			return error("x has a wrong value ! (" + x + ")", true, console.warn);
		if(y < 0 || y >= this.sprite.getHeight())
			return error("y has a wrong value ! (" + y + ")", true, console.warn);

		return false;
	}

	isGetPixelPositionByCanvasParametersIncorrect(x, y, canvasWidth, canvasHeight) {
		if(this.sprite.getData().length <= 0)
			return error("There's no content in the this.sprite.", true, console.warn);
		if(x < 0 || x >= canvasWidth)
			return error("x has a wrong value ! (" + x + ")", true, console.warn);
		if(y < 0 || y >= canvasHeight)
			return error("y has a wrong value ! (" + y + ")", true, console.warn);

		return false;
	}
}
