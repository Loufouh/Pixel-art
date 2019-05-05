"use strict";

function resetTransform(ctx=targetContext) {
	setTransform(1, 0, 0, 1, 0, 0, ctx);
}

function setTransform(hScal, hSkew, vSkew, vScal, hMov, vMov, ctx=targetContext) {
	ctx.setTransform(hScal, hSkew, vSkew, vScal, hMov, vMov);
}

function translate(x, y, ctx=targetContext) {
	ctx.translate(x, y);
}

function rotate(angle, ctx=targetContext) {
	ctx.rotate(angle);
}

function scale(x, y, ctx=targetContext) {
	ctx.scale(x, y);	
}

function save(ctx=targetContext) {
	ctx.save();
}

function restore(ctx=targetContext) {
	ctx.restore();	
}
