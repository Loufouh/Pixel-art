'use strict';

class TestTilemapGetIndex {
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
		let tilemap = new Tilemap(2, 2);

		this.asserter.assertSame(0, tilemap.getIndex(0, 0), 'first');
	}

	testGetLastIndex() {
		let tilemap = new Tilemap(3, 3);

		this.asserter.assertSame(8, tilemap.getIndex(2, 2), 'last');
	}

	testGetNormalIndex() {
		let tilemap = new Tilemap(5, 3);

		this.asserter.assertSame(8, tilemap.getIndex(3, 1), 'normal (3;1)');
		this.asserter.assertSame(11, tilemap.getIndex(1, 2), 'normal (1;2)');
		this.asserter.assertSame(4, tilemap.getIndex(4, 0), 'normal (4;0)');
	}

	testGetLeftOutIndex() {
		let tilemap = new Tilemap(2, 2);

		this.asserter.assertSame(0, tilemap.getIndex(-5, 1), 'left out');
	}

	testGetRightOutIndex() {
		let tilemap = new Tilemap(2, 2);

		this.asserter.assertSame(0, tilemap.getIndex(5, 1), 'right out');
	}

	testGetUpOutIndex() {
		let tilemap = new Tilemap(2, 2);

		this.asserter.assertSame(0, tilemap.getIndex(1, -5), 'up out');
	}
	
	testGetDownOutIndex() {
		let tilemap = new Tilemap(2, 2);

		this.asserter.assertSame(0, tilemap.getIndex(1, 5), 'down out');
	}
}
