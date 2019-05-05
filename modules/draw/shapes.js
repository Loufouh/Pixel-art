"use strict";

let targetContext;

function setTargetContext(ctx) {
	targetContext = ctx;
}

function strokeWeight(weight, ctx=targetContext) {
	ctx.lineWidth = weight;
}

function border(color, ctx=targetContext) {
	noFill();
	stroke(color, ctx);
	rect(0, 0, ctx.canvas.width, ctx.canvas.height, ctx);
}

function circle(xCenter, yCenter, radius, ctx=targetContext) {
	arc(xCenter, yCenter, radius, 0, 2*Math.PI, false, ctx);
}

function arc(xCenter, yCenter, radius, startAngle, stopAngle, counterClockwise=false, ctx=targetContext) {
	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radius, startAngle, stopAngle);

	drawShape(ctx);

	ctx.closePath();
}

function rect(xLeft, yTop, width, height, ctx=targetContext) {
	ctx.beginPath();
	ctx.rect(xLeft, yTop, width, height);

	drawShape(ctx);

	ctx.closePath();
}

function grid(pos, scales, separators, dimensions) {
	rect(pos.x, pos.y, dimensions.x, dimensions.y);

	for(let i = (pos.x + scales.x) ; i <= (pos.x + dimensions.x - 1); i += scales.x) {
		line(i, pos.y, i, (pos.y + dimensions.y));
		i += separators.x;
		line(i, pos.y, i, (pos.y + dimensions.y));
	}

	for(let j = (pos.y + scales.y) ; j <= (pos.y + dimensions.y - 1); j += scales.y) {
		line(pos.x, j, (pos.x + dimensions.x), j);
		j += separators.y;
		line(pos.x, j, (pos.x + dimensions.x), j);
	}
}


function line(x1, y1, x2, y2, ctx=targetContext) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);

	drawShape(ctx);

	ctx.closePath();
}


function drawImage(img, sx, sy, sWidth=img.width, sHeight=img.height, dx, dy, dWidth, dHeight, ctx=targetContext) {
	if(dx === undefined) {
		ctx.drawImage(img, sx, sy, sWidth, sHeight);
	} else {
		ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
	}
}

