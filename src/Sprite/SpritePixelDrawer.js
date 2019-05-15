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

class SpritePixelDrawer {
	constructor(sprite) {
		this.sprite = sprite;
	}

	drawPixel(x, y) {
		this.sprite.setPixel(this.sprite.getDrawingColor(), this.sprite.getIndex(x, y));
	}

	clearPixel(x, y) {
		this.sprite.setPixel(this.sprite.getCleaningColor(), this.sprite.getIndex(x, y))
	}
}

