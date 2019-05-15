'use strict';

class TestSpriteGetIndex {
	constructor() {
		this.asserter = new Asserter();
	}
	
	test() {
		console.log('%c GetIndex', 'color: orange');

		this.testGetFirstIndex();
		this.testGetLastIndex();
		this.testGetNormalIndex();

		this.testGetLeftOutIndex();
		this.testGetRightOutIndex();
		this.testGetUpOutIndex();
		this.testGetDownOutIndex();
	}

	testGetFirstIndex() {
		let sprite = new Sprite(2, 2);

		this.asserter.assertSame(0, sprite.getIndex(0, 0), 'first');
	}

	testGetLastIndex() {
		let sprite = new Sprite(3, 3);

		this.asserter.assertSame(8, sprite.getIndex(2, 2), 'last');
	}

	testGetNormalIndex() {
		let sprite = new Sprite(5, 3);

		this.asserter.assertSame(8, sprite.getIndex(3, 1), 'normal (3;1)');
		this.asserter.assertSame(11, sprite.getIndex(1, 2), 'normal (1;2)');
		this.asserter.assertSame(4, sprite.getIndex(4, 0), 'normal (4;0)');
	}

	testGetLeftOutIndex() {
		let sprite = new Sprite(2, 2);

		this.asserter.assertSame(0, sprite.getIndex(-5, 1), 'left out');
	}

	testGetRightOutIndex() {
		let sprite = new Sprite(2, 2);

		this.asserter.assertSame(0, sprite.getIndex(5, 1), 'right out');
	}

	testGetUpOutIndex() {
		let sprite = new Sprite(2, 2);

		this.asserter.assertSame(0, sprite.getIndex(1, -5), 'up out');
	}
	
	testGetDownOutIndex() {
		let sprite = new Sprite(2, 2);

		this.asserter.assertSame(0, sprite.getIndex(1, 5), 'down out');
	}
}
