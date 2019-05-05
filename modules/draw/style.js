"use strict";

let isStroking = true;
let isFilling = true;

function drawShape(ctx=targetContext) {
	if(isFilling)
		ctx.fill();
	if(isStroking)
		ctx.stroke();
} 

function createRadialGradient(x1, y1, r1, x2, y2, r2, ctx=targetContext) {
	return ctx.createRadialGradient(x1, y1, r1, x2, y2, r2, ctx=targetContext);
}

function createLinearGradient(x1, y1, x2, y2, ctx=targetContext) {
	return ctx.createLinearGradient(x1, y1, x2, y2);
}

function fillGradient(gradient, ctx=targetContext) {
	ctx.fillStyle = gradient;
}

function strokeGradient(gradient, ctx=targetContext) {
	ctx.strokeStyle = gradient;
}

function fill(color, ctx=targetContext) {
	if( !(color instanceof Color) )
		color = new Color(color);

	ctx.fillStyle = color.toString();
	isFilling = true;
}

function stroke(color, ctx=targetContext) {
	if( !(color instanceof Color) )
		color = new Color(color);

	ctx.strokeStyle = color.toString();
	isStroking = true;
}

function background(color, ctx=targetContext) {
	fill(color, ctx);
	noStroke();
	rect(0, 0, ctx.canvas.width, ctx.canvas.height, ctx);
}

function noFill() {
	isFilling = false;
}

function noStroke() {
	isStroking = false;
}

function lineCap(type, ctx=targetContext) {
	ctx.lineCap = type;
}

function lineJoin(type, ctx=targetContext) {
	ctx.lineJoin = type;
}

function miterLimit(value, ctx=targetContext) {
	ctx.miterLimit = value;
}

function lineDashOffset(value, ctx=targetContext) {
	ctx.lineDashOffset = value;
}

function setLineDash(segments, ctx=targetContext) {
	ctx.setLineDash(segments);
}

function getLineDash(ctx=targetContext) {
	return ctx.getLineDash();
}
