'use strict'

class TestSpriteAddColor {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c SpriteAddColor', 'color: orange');
		this.testAddOneColor();
		this.testAddTwoColors();
	}

	testAddOneColor() {
		let sprite = new Sprite(2, 2);
		let addedColor = new Color(52, 52, 52);
	
		sprite.addColor(addedColor);

		let pixelColorId = sprite.getLastColorId();

		this.asserter.assertTrue(Color.same(sprite.getPixelColor(pixelColorId), sprite.getPixelColor(pixelColorId)), 'one color');
	}

	testAddTwoColors() {
		let sprite = new Sprite(50, 50);
		
		let addedColor1 = new Color(52, 52, 78);
		let addedColor2 = new Color(0, 5, 84);
		
	    sprite.addColor(addedColor1);
		let pixelColorId1 = sprite.getLastColorId();

		sprite.addColor(addedColor2);
		let pixelColorId2 = sprite.getLastColorId();
	
		this.asserter.assertTrue(Color.same(sprite.getPixelColor(pixelColorId1), addedColor1), 'two colors 1#');
		this.asserter.assertTrue(Color.same(sprite.getPixelColor(pixelColorId2), addedColor2), 'two colors 2#');
	}
}

