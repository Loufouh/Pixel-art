'use strict';

class TestSpriteDrawPixel {
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
		let sprite = new Sprite(5, 5);
		
		sprite.drawPixel(3, 3);
	
		this.asserter.assertSame(1, sprite.getData()[sprite.getIndex(3, 3)], 'on white');
	}

	testDrawPixelOnBlack() {
		let sprite = new Sprite(5, 5);

		sprite.drawPixel(2, 2);
		sprite.drawPixel(2, 2);

		this.asserter.assertSame(1, sprite.getData()[sprite.getIndex(2, 2)], 'on black');
	}

	testDrawPixelColor() {
		let sprite = new Sprite(5, 5);

		sprite.setDrawingColor(PixelColors.BLUE);
		sprite.drawPixel(2, 2);

		sprite.setDrawingColor(PixelColors.RED);
		sprite.drawPixel(3, 2);

		sprite.setDrawingColor(PixelColors.YELLOW);
		sprite.drawPixel(4, 2);

		this.asserter.assertSame(PixelColors.BLUE, sprite.getData()[sprite.getIndex(2, 2)], 'blue');
		this.asserter.assertSame(PixelColors.RED, sprite.getData()[sprite.getIndex(3, 2)], 'red');
		this.asserter.assertSame(PixelColors.YELLOW, sprite.getData()[sprite.getIndex(4, 2)], 'yellow');
	}
}
