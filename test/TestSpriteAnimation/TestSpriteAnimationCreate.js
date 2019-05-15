'use strict';

class TestSpriteAnimationCreate {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c Create', 'color: orange');
		
		this.testCreateSimple();
		this.testCreateWithFrameRate();
		this.testCreateWithNegativeFrameRate();
		this.testCreateWithZeroFrameRate();
	}

	testCreateSimple() {
		let animation = new SpriteAnimation();

		this.asserter.assertArraySame([], animation.getSprites(), 'CreateSimple sprites');
		this.asserter.assertSame(1, animation.getFrameRate(), 'CreateSimple frameRate');
	}

	testCreateWithFrameRate() {
		let animation = new SpriteAnimation(5);

		this.asserter.assertArraySame([], animation.getSprites(), 'CreateWithFrameRate sprites');
		this.asserter.assertSame(5, animation.getFrameRate(), 'CreateWithFrameRate frameRate');
	}

	testCreateWithNegativeFrameRate() {
		let animation = new SpriteAnimation(-4);

		this.asserter.assertArraySame([], animation.getSprites(), 'CreateWithNegativeFrameRate sprites');
		this.asserter.assertSame(1, animation.getFrameRate(), 'CreateWithNegativeFrameRate frameRate');
	}

	testCreateWithZeroFrameRate() {
		let animation = new SpriteAnimation(0);

		this.asserter.assertArraySame([], animation.getSprites(), 'CreateWithZeroFrameRate sprites');
		this.asserter.assertSame(1, animation.getFrameRate(), 'CreateWithZeroFrameRate frameRate');
	}

}
