'use strict';

class TestSpriteAnimation {
	constructor() { }

	test() {
		console.log('%cTestAnimation', 'color: lightgreen');
		
		new TestSpriteAnimationCreate().test();
		new TestSpriteAnimationAddSprite().test();
		new TestSpriteAnimationInsertSprite().test();
		new TestSpriteAnimationRemoveSprite().test();
	}

}
