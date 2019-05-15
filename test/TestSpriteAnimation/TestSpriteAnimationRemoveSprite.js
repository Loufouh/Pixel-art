'use strict';

class TestSpriteAnimationRemoveSprite {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c RemoveSprite', 'color: orange');
		
		this.testRemoveLast();
		this.testRemoveFirst();
		this.testRemoveCenter();
	}

	testRemoveLast() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite();
		let sprite2 = new Sprite();
		let sprite3 = new Sprite();
		let sprite4 = new Sprite();
		let sprite5 = new Sprite();

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4)
			 .addSprite(sprite5);

		animation.removeSprite(animation.getLength() - 1);

		this.asserter.assertArraySame([sprite1, sprite2, sprite3, sprite4], animation.getSprites(), 'removeLast');
	}

	testRemoveFirst() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite();
		let sprite2 = new Sprite();
		let sprite3 = new Sprite();
		let sprite4 = new Sprite();
		let sprite5 = new Sprite();

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4)
			 .addSprite(sprite5);

		animation.removeSprite(0);

		this.asserter.assertArraySame([sprite2, sprite3, sprite4, sprite5], animation.getSprites(), 'removeFirst');
	}

	testRemoveCenter() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite();
		let sprite2 = new Sprite();
		let sprite3 = new Sprite();
		let sprite4 = new Sprite();
		let sprite5 = new Sprite();
		let sprite6 = new Sprite();
		let sprite7 = new Sprite();

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4)
			 .addSprite(sprite5)
			 .addSprite(sprite6)
			 .addSprite(sprite7);

		animation.removeSprite(4);

		this.asserter.assertArraySame([sprite1, sprite2, sprite3, sprite4, sprite6, sprite7], animation.getSprites(), 'removeCenter');
	}
}
