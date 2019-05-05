/*
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *  	WARNING: This whole module of code is based on
 *           	 the dimensions of the font : "monospace"
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
*/

"use strict";

const WIDTH_COEF = 18/8;
const HEIGHT_COEF =  75/48;

const FONTSIZE_MODE = {
    FONTSIZE: "fontsize",
    WIDTH: "width",
    HEIGHT: "height"
}

function font(size, fontname, sizeMode=FONTSIZE_MODE.FONTSIZE, ctx=targetContext) {
    if(sizeMode === FONTSIZE_MODE.WIDTH)
        size *= WIDTH_COEF;
    else if(sizeMode = FONTSIZE_MODE.HEIGHT)
        size *= HEIGHT_COEF;
	ctx.font = size + "px " + fontname;
}

function textAlign(alignment, ctx=targetContext) {
	ctx.textAlign = alignment;
}

function text(x, y, str, ctx=targetContext) {
	if(isStroking)
		ctx.strokeText(str, x, y);
	if(isFilling)
		ctx.fillText(str, x, y);
}

function textFitInBox(xBoxLeft, yBoxTop, boxWidth, boxHeight, str, ctx=targetContext) {
	let boxPos = new SimpleVector(xBoxLeft, yBoxTop);
	let boxDim = new SimpleVector(boxWidth, boxHeight);
	let strDim = new SimpleVector();

	if(boxDim.x/str.length < boxDim.y)
		strDim = getFontDimensions((boxDim.x*5/12)/str.length, FONTSIZE_MODE.WIDTH);
	else
		strDim = getFontDimensions(boxDim.y*12/24, FONTSIZE_MODE.HEIGHT);

	textAlign("center", ctx);
	font(strDim.x, "monospace", FONTSIZE_MODE.WIDTH, ctx);
	text(boxPos.x + boxDim.x/2, boxPos.y + (boxDim.y + strDim.y)/2, str, ctx);
}

function getFontDimensions(size, sizeMode) {
	let fontDim = new SimpleVector();
	
	if(sizeMode === FONTSIZE_MODE.WIDTH) {
		fontDim.x = size;
		fontDim.y = getHeightOfChar(fontDim.x, FONTSIZE_MODE.WIDTH);
	} else if(sizeMode === FONTSIZE_MODE.HEIGHT) {
		fontDim.y = size;
		fontDim.x = getWidthOfChar(fontDim.y, FONTSIZE_MODE.HEIGHT);
	} else if(sizeMode === FONTSIZE_MODE.FONTSIZE) {
		fontDim.x = getWidthOfChar(size, FONTSIZE_MODE.FONTSIZE);
		fontDim.y = getHeightOfChar(size, FONTSIZE_MODE.FONTSIZE);
	} else
		return error("The value entered is wrong, it's necessary to know the width, the height or the fontsize to deduce the font dimensions !",
					 new SimpleVector(1, 1));

	return fontDim;
}

function getFontSize(size, sizeMode) {
    if(sizeMode === FONTSIZE_MODE.WIDTH)
        return size*WIDTH_COEF
    else if (sizeMode === FONTSIZE_MODE.HEIGHT)
        return size*HEIGHT_COEF;
    else
        return error("The value entered is wrong, it's necessary to know the height or the width of a caractere to deduce the fontsize !", 1);
}

function getWidthOfChar(size, sizeMode=FONTSIZE_MODE.FONTSIZE) {
    if(sizeMode === FONTSIZE_MODE.FONTSIZE)
        return size/WIDTH_COEF;
    else if(sizeMode === FONTSIZE_MODE.HEIGHT)
        return size*HEIGHT_COEF/WIDTH_COEF;
    else
        return error("The value entered is wrong, it's necessary to know the fontsize or the height of a caractere to deduce its width !", 1);
}

function getHeightOfChar(size, sizeMode=FONTSIZE_MODE.FONTSIZE) {
    if(sizeMode === FONTSIZE_MODE.FONTSIZE)
        return size/HEIGHT_COEF;
    else if(sizeMode === FONTSIZE_MODE.WIDTH)
        return size*WIDTH_COEF/HEIGHT_COEF; 
    else
        return error("The value entered is wrong, it's necessary to know the fontsize or the width of a caractere to deduce its height !", 1);
}
