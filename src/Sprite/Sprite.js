/*
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *	Auteur: Louis 
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
*/

class Sprite {
	constructor(width=0, height=0) {
		this.dataHandler = new SpriteDataHandler(width, height);
		this.positionCalculator = new SpritePositionCalculator(this);
		this.pixelColorHandler = new SpritePixelColorHandler(this);
		this.pixelDrawer = new SpritePixelDrawer(this);
		this.drawer = new SpriteDrawer(this);
	}
	
	draw() {
		this.drawer.draw();
	}

	drawPixel(x, y) {
		this.pixelDrawer.drawPixel(x, y);
	}

	clearPixel(x, y) {
		this.pixelDrawer.clearPixel(x, y);
	}

	addColor(color) {
		this.pixelColorHandler.addColor(color);
	}

// ########## GETTERS AND SETTERS #############

	getPixelColor(pixelColorId) {
		return this.pixelColorHandler.getPixelColor(pixelColorId);
	}

	getLastColorId() {
		return this.pixelColorHandler.getLastColorId();
	}

	getIndex(x, y) {
		return this.positionCalculator.getIndex(x, y);
	}

	getPixelPositionByCanvas(x, y, canvasWidth, canvasHeight) {
		return this.positionCalculator.getPixelPositionByCanvas(x, y, canvasWidth, canvasHeight);
	}

	getDrawingColor() {
		return this.pixelColorHandler.drawingColor;
	}

	setDrawingColor(color) {
		this.pixelColorHandler.drawingColor = color;
	}

	getCleaningColor() {
		return this.pixelColorHandler.cleaningColor;
	}

	setCleaningColor(color) {
		this.pixelColorHandler.cleaningColor = color;
	}

	getData() {
		return this.dataHandler.data;
	}

	setPixel(value, index) {
		this.dataHandler.data[index] = value;
	}

	getWidth() {
		return this.dataHandler.width;
	}

	setWidth(width) {
		this.dataHandler.width = width;
	}

	getHeight() {
		return this.dataHandler.height;
	}

	setHeight(height) {
		this.dataHandler.height = height;
	}
}

