'use strict';

class TestSpriteAnimationInsertSprite {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c InsertSprite', 'color: orange');

		this.testInsertInEmpty();		
		this.testInsertAtBegining();
		this.testInsertAtEnd();
		this.testInsertBetween();
		this.testInsertBeforeZero();
		this.testInsertAfterEnd();
	}

	testInsertInEmpty() {
		let animation = new SpriteAnimation();
		let sprite = new Sprite();

		animation.insertSprite(sprite, 0);

		this.asserter.assertArraySame([sprite], animation.getSprites(), 'inEmpty');
	}

	testInsertAtBegining() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite(1, 1);
		let sprite2 = new Sprite(2, 2);
		let sprite3 = new Sprite(3, 4);
		let sprite4 = new Sprite(4, 4);
		let sprite5 = new Sprite(5, 6);

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4);

		animation.insertSprite(sprite5, 0);

		this.asserter.assertArraySame([sprite5, sprite1, sprite2, sprite3, sprite4], animation.getSprites(), 'atBegining');
	}
	
	testInsertAtEnd() {
		let animation = new SpriteAnimation();
		let sprite1 = new Sprite(1, 1);
		let sprite2 = new Sprite(2, 2);
		let sprite3 = new Sprite(3, 4);
		let sprite4 = new Sprite(4, 4);
		let sprite5 = new Sprite(5, 6);

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4);

		animation.insertSprite(sprite5, animation.getLength());

		this.asserter.assertArraySame([sprite1, sprite2, sprite3, sprite4, sprite5], animation.getSprites(), 'atEnd');
	}

	testInsertBetween() {
		let animation = new SpriteAnimation()
		let sprite1 = new Sprite(1, 1);
		let sprite2 = new Sprite(2, 2);
		let sprite3 = new Sprite(3, 4);
		let sprite4 = new Sprite(4, 4);
		let sprite5 = new Sprite(5, 6);

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4);

		animation.insertSprite(sprite5, 2);

		this.asserter.assertArraySame([sprite1, sprite2, sprite5, sprite3, sprite4], animation.getSprites(), 'between');
	}

	testInsertBeforeZero() {		
		let animation = new SpriteAnimation()
		let sprite1 = new Sprite(1, 1);
		let sprite2 = new Sprite(2, 2);
		let sprite3 = new Sprite(3, 4);
		let sprite4 = new Sprite(4, 4);
		let sprite5 = new Sprite(5, 6);

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4);

		animation.insertSprite(sprite5, -3);

		this.asserter.assertArraySame([sprite5, sprite1, sprite2, sprite3, sprite4], animation.getSprites(), 'beforeZero');
	}


	testInsertAfterEnd() {
		let animation = new SpriteAnimation()
		let sprite1 = new Sprite(1, 1);
		let sprite2 = new Sprite(2, 2);
		let sprite3 = new Sprite(3, 4);
		let sprite4 = new Sprite(4, 4);
		let sprite5 = new Sprite(5, 6);

		animation.addSprite(sprite1)
			 .addSprite(sprite2)
			 .addSprite(sprite3)
			 .addSprite(sprite4);

		animation.insertSprite(sprite5, 121);

		this.asserter.assertArraySame([sprite1, sprite2, sprite3, sprite4, sprite5], animation.getSprites(), 'afterend');

	}
}
