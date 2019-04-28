'use strict';

class TestTilemapCreate {
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
		let tilemap = new Tilemap();

		this.asserter.assertSame(0, tilemap.getWidth(), 'empty width');
		this.asserter.assertSame(0, tilemap.getHeight(), 'empty height');
		this.asserter.assertArraySame([], tilemap.getData(), 'empty data');
	}

	testCreate1x1() {
		let tilemap = new Tilemap(1, 1);

		this.asserter.assertSame(1, tilemap.getWidth(), '1x1 width');
		this.asserter.assertSame(1, tilemap.getHeight(), '1x1 height');
		this.asserter.assertArraySame([0], tilemap.getData(), '1x1 data');
	}

	testCreate3x3() {
		let tilemap = new Tilemap(3, 3);

		this.asserter.assertSame(3, tilemap.getWidth(), '3x3 width');
		this.asserter.assertSame(3, tilemap.getHeight(), '3x3 height');
		this.asserter.assertArraySame([0, 0, 0, 0, 0, 0, 0, 0, 0], tilemap.getData(), '3x3 data');
	}

	testCreate2x4() {
		let tilemap = new Tilemap(2, 4);

		this.asserter.assertSame(2, tilemap.getWidth(), '2x4 width');
		this.asserter.assertSame(4, tilemap.getHeight(), '2x4 height');
		this.asserter.assertArraySame([0, 0, 0, 0, 0, 0, 0, 0], tilemap.getData(), '2x4 data');
	}

}
