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

class TilemapPixelDrawer {
	constructor(tilemap) {
		this.tilemap = tilemap;
	}

	drawPixel(x, y) {
		this.tilemap.setPixel(this.tilemap.getDrawingColor(), this.tilemap.getIndex(x, y));
	}

	clearPixel(x, y) {
		this.tilemap.setPixel(this.tilemap.getCleaningColor(), this.tilemap.getIndex(x, y))
	}
}

