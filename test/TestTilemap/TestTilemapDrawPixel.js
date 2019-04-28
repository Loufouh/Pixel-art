'use strict';

class TestTilemapDrawPixel {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c DrawPixel', 'color: orange');
		this.testDrawPixelOnWhite();
		this.testDrawPixelOnBlack();
		this.testDrawPixelColor();
	}

	testDrawPixelOnWhite() {
		let tilemap = new Tilemap(5, 5);
		
		tilemap.drawPixel(3, 3);
	
		this.asserter.assertSame(1, tilemap.getData()[tilemap.getIndex(3, 3)], 'on white');
	}

	testDrawPixelOnBlack() {
		let tilemap = new Tilemap(5, 5);

		tilemap.drawPixel(2, 2);
		tilemap.drawPixel(2, 2);

		this.asserter.assertSame(1, tilemap.getData()[tilemap.getIndex(2, 2)], 'on black');
	}

	testDrawPixelColor() {
		let tilemap = new Tilemap(5, 5);

		tilemap.setDrawingColor(PixelColors.BLUE);
		tilemap.drawPixel(2, 2);

		tilemap.setDrawingColor(PixelColors.RED);
		tilemap.drawPixel(3, 2);

		tilemap.setDrawingColor(PixelColors.YELLOW);
		tilemap.drawPixel(4, 2);

		this.asserter.assertSame(PixelColors.BLUE, tilemap.getData()[tilemap.getIndex(2, 2)], 'blue');
		this.asserter.assertSame(PixelColors.RED, tilemap.getData()[tilemap.getIndex(3, 2)], 'red');
		this.asserter.assertSame(PixelColors.YELLOW, tilemap.getData()[tilemap.getIndex(4, 2)], 'yellow');
	}
}
