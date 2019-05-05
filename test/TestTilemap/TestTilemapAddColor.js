'use strict'

class TestTilemapAddColor {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%cTestTilemapAddColor', 'color: orange');
		this.testAddOneColor();
		this.testAddTwoColors();
	}

	testAddOneColor() {
		let tilemap = new Tilemap(2, 2);
		let addedColor = new Color(52, 52, 52);
	
		tilemap.addColor(addedColor);

		let pixelColorId = tilemap.getLastColorId();

		this.asserter.assertTrue(Color.same(tilemap.getPixelColor(pixelColorId), tilemap.getPixelColor(pixelColorId)), 'one color');
	}

	testAddTwoColors() {
		let tilemap = new Tilemap(50, 50);
		
		let addedColor1 = new Color(52, 52, 78);
		let addedColor2 = new Color(0, 5, 84);
		
	    tilemap.addColor(addedColor1);
		let pixelColorId1 = tilemap.getLastColorId();

		tilemap.addColor(addedColor2);
		let pixelColorId2 = tilemap.getLastColorId();
	
		this.asserter.assertTrue(Color.same(tilemap.getPixelColor(pixelColorId1), addedColor1), 'two colors 1#');
		this.asserter.assertTrue(Color.same(tilemap.getPixelColor(pixelColorId2), addedColor2), 'two colors 2#');
	}
}

