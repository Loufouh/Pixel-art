"use strict";

function foreachImageData(imgData, func, use2DCoordinates=true) {
	foreachImageDataRect(0, 0, imgData.width, imgData.height, imgData, func, use2DCoordinates);
}

function mapImageData(imgData, func, use2DCoordinates=true) {
	return mapImageDataRect(0, 0, imgData.width, imgData.height, imgData, func, use2DCoordinates);
}

function foreachImageDataRect(posX, posY, width, height, imgData, func, use2DCoordinates=true) {
	if(use2DCoordinates) {
		mapImageDataRect(posX, posY, width, height, imgData, (pixel, x, y) => {

			func(pixel, x, y);
			return pixel;

		}, use2DCoordinates)
	} else {
		mapImageDataRect(posX, posY, width, height, imgData, (pixel, x, y) => {

			func(pixel, x, y);
			return pixel;

		}, use2DCoordinates);
	}
}

function mapImageDataRect(posX, posY, width, height, imgData, func, use2DCoordinates=true) {
	if( ( posX < 0 || posX + width > imgData.width ) ||
	    ( posY < 0 || posY + height > imgData.height ) )
		return error("The position and the dimensions precised don't match with imgData's dimensions.", imgData);
	
	if( (use2DCoordinates && func(new Color(0), 0, 0) === undefined ) || 
	    (!use2DCoordinates && func(new Color(0), 0, 0) === undefined) ) 
		return error("The output of func is undefined.", imgData)

	for(let x = posX; x < (posX + width); x++) {
		for(let y = posY; y < (posY + height); y++) {
			if(use2DCoordinates)
				setPixel( x, y, imgData, func( getPixel(x, y, imgData), x, y) );
			else
				setPixel( x, y, imgData, func( getPixel(x, y, imgData), getPixelIndex(x, y, imgData) ) );
		}
	}
	return imgData;
}

function getPixel(x, y, imgData) {
	return getPixelByIndex( getPixelIndex(x, y, imgData) , imgData);
}

function setPixel(x, y, imgData, color) {
	setPixelByIndex(getPixelIndex(x, y, imgData), imgData, color);
}

function setPixelByIndex(i, imgData, color) {
	imgData.data[i*4] = color.r;
	imgData.data[i*4 + 1] = color.g;
	imgData.data[i*4 + 2] = color.b;
	imgData.data[i*4 + 3] = Math.floor(color.a*255);
}

function getPixelByIndex(i, imgData) {	
	return new Color( imgData.data[i*4],
			  imgData.data[i*4 + 1],
			  imgData.data[i*4 + 2],
			  Math.floor(imgData.data[i*4 + 3]/255) );
}

function getPixelIndex(x, y, imgData) {
	if(x < 0 || x >= imgData.width)
		return error("x has a wrong value ! (" + x + ")", 0);
	if(y < 0 || y >= imgData.height)
		return error("y has a wrong value ! (" + y + ")", 0);

	return y*imgData.width + x;
}

function createImageData(width, height, ctx=targetContext) {
	return ctx.createImageData(width, height, ctx);
}

function getImageData(x, y, width, height, ctx=targetContext) {
	return ctx.getImageData(x, y, width, height);
}

function putImageData(imgData, x, y, ctx=targetContext) {
	ctx.putImageData(imgData, x, y);
}

function fillImageData(imgData, value) {
	return mapImageData(imgData, () => value);
}

