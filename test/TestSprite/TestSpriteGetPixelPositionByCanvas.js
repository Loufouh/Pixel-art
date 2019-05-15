'use strict';

class TestSpriteGetPixelPositionByCanvas {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c GetPixelPositionByCanvas', 'color: orange');
		this.test1x1();
		this.test2x2();
		this.test10x40();
		this.test0x0();
	}

	test1x1() {
		let sprite = new Sprite(1, 1);

		let position = sprite.getPixelPositionByCanvas(3, 3, 10, 10);

		this.asserter.assertSame(0, position.x, '1x1 position.x');
		this.asserter.assertSame(0, position.y, '1x1 position.y');
	}

	test2x2() {
		let sprite = new Sprite(2, 2);

		let position = sprite.getPixelPositionByCanvas(70, 60, 100, 100);
		
		this.asserter.assertSame(1, position.x, '2x2 position.x');
		this.asserter.assertSame(1, position.y, '2x2 position.y');
	}

	test10x40() {
		let sprite = new Sprite(10, 40);

		let position = sprite.getPixelPositionByCanvas(330, 422, 654, 480);
		
		this.asserter.assertSame(5, position.x, '10x40 position.x');
		this.asserter.assertSame(35, position.y, '10x40 position.y');
	}

	test0x0() {
		let sprite = new Sprite();

		let position = sprite.getPixelPositionByCanvas(100, 100, 200, 200);

		this.asserter.assertSame(0, position.x, '0x0 position.x');
		this.asserter.assertSame(0, position.y, '0x0 position.y');
	}
}	
