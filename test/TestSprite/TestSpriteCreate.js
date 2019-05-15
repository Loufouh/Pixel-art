'use strict';

class TestSpriteCreate {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c Create', 'color: orange');

		this.testCreateEmpty();
		this.testCreate1x1();
		this.testCreate3x3();
		this.testCreate2x4();
	}

	testCreateEmpty() {
		let sprite = new Sprite();

		this.asserter.assertSame(0, sprite.getWidth(), 'empty width');
		this.asserter.assertSame(0, sprite.getHeight(), 'empty height');
		this.asserter.assertArraySame([], sprite.getData(), 'empty data');
	}

	testCreate1x1() {
		let sprite = new Sprite(1, 1);

		this.asserter.assertSame(1, sprite.getWidth(), '1x1 width');
		this.asserter.assertSame(1, sprite.getHeight(), '1x1 height');
		this.asserter.assertArraySame([0], sprite.getData(), '1x1 data');
	}

	testCreate3x3() {
		let sprite = new Sprite(3, 3);

		this.asserter.assertSame(3, sprite.getWidth(), '3x3 width');
		this.asserter.assertSame(3, sprite.getHeight(), '3x3 height');
		this.asserter.assertArraySame([0, 0, 0, 0, 0, 0, 0, 0, 0], sprite.getData(), '3x3 data');
	}

	testCreate2x4() {
		let sprite = new Sprite(2, 4);

		this.asserter.assertSame(2, sprite.getWidth(), '2x4 width');
		this.asserter.assertSame(4, sprite.getHeight(), '2x4 height');
		this.asserter.assertArraySame([0, 0, 0, 0, 0, 0, 0, 0], sprite.getData(), '2x4 data');
	}

}
