'use strict';

class TestTilemap {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%cTestTilemap', 'color: lightgreen');

		new TestTilemapCreate().test();
		new TestTilemapGetIndex().test();
		new TestTilemapDrawPixel().test();
		new TestTilemapClearPixel().test();
		new TestTilemapGetPixelPositionByCanvas().test();
	}
}
