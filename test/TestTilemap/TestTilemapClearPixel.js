'use strict';

class TestTilemapClearPixel {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c ClearPixel', 'color: orange')
		this.testClearPixelOnBlack();
		this.testClearPixelOnWhite();
	}

	testClearPixelOnWhite() {
		let tilemap = new Tilemap(6, 6);
		
		tilemap.drawPixel(3, 1);
		tilemap.clearPixel(3, 1);

		this.asserter.assertSame(0, tilemap.getData()[tilemap.getIndex(3, 1)], 'on black');
	}

	testClearPixelOnBlack() {
		let tilemap = new Tilemap(6, 6);
		
		tilemap.clearPixel(4, 5);

		this.asserter.assertSame(0, tilemap.getData()[tilemap.getIndex(4, 5)], 'on white');
	}
}

