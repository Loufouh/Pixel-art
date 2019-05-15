'use strict';

class TestSpriteAnimationAddSprite {
	constructor() {
		this.asserter = new Asserter();
	}
	
	test() {
		console.log('%c AddSprite', 'color: orange');

		this.testAddOne();
		this.testAddTwo();
		this.testAddChain();
	}
	
	testAddOne() {
		let animation = new SpriteAnimation();
		let sprite = new Sprite();
	
		animation.addSprite(sprite);

		this.asserter.assertArraySame([sprite], animation.getSprites(), 'addOne');
	}

	testAddTwo() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite(18);
		let sprite2 = new Sprite(4);

		animation.addSprite(sprite1);
		animation.addSprite(sprite2);

		this.asserter.assertArraySame([sprite1, sprite2], animation.getSprites(), 'addTwo');
	}

	testAddChain() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite(4);
		let sprite2 = new Sprite(2);
		let sprite3 = new Sprite(8);

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3);

		this.asserter.assertArraySame([sprite1, sprite2, sprite3], animation.getSprites(), 'addChain');
	}
}
