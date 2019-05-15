'use strict';

class TestSpriteClearPixel {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c ClearPixel', 'color: orange')
		this.testClearPixelOnBlack();
		this.testClearPixelOnWhite();
	}

	testClearPixelOnWhite() {
		let sprite = new Sprite(6, 6);
		
		sprite.drawPixel(3, 1);
		sprite.clearPixel(3, 1);

		this.asserter.assertSame(0, sprite.getData()[sprite.getIndex(3, 1)], 'on black');
	}

	testClearPixelOnBlack() {
		let sprite = new Sprite(6, 6);
		
		sprite.clearPixel(4, 5);

		this.asserter.assertSame(0, sprite.getData()[sprite.getIndex(4, 5)], 'on white');
	}
}

