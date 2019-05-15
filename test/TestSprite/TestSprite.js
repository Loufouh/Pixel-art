'use strict';

class TestSprite {
	constructor() { }

	test() {
		console.log('%cTestSprite', 'color: lightgreen');

		new TestSpriteCreate().test();
		new TestSpriteGetIndex().test();
		new TestSpriteDrawPixel().test();
		new TestSpriteClearPixel().test();
		new TestSpriteGetPixelPositionByCanvas().test();
		new TestSpriteAddColor().test();
	}
}
