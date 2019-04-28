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

class Tilemap {
	constructor(width=0, height=0) {
		this.dataHandler = new TilemapDataHandler(width, height);
		this.positionCalculator = new TilemapPositionCalculator(this);
		this.pixelColorHandler = new TilemapPixelColorHandler();
		this.pixelDrawer = new TilemapPixelDrawer(this);
		this.drawer = new TilemapDrawer(this);
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

// ########## GETTERS AND SETTERS #############

	getPixelColor(pixelColor) {
		return this.pixelColorHandler.getPixelColor(pixelColor);
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

