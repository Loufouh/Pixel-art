/*
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *	Auteur: Maxence
 *
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
*/

let largeurSpriteInput;
let hauteurSpriteInput;

let validerDimensionsSpriteButton;

function initialiserInterfaceDimensionsSprite() {
	largeurSpriteInput = document.getElementById("numberPixelLargeurInput");
	hauteurSpriteInput = document.getElementById("numberPixelHauteurInput");
	validerDimensionsSpriteButton = document.getElementById("validerDimensionsSpriteButton");

	validerDimensionsSpriteButton.addEventListener('click', validerDimensionsSprite);
}

function validerDimensionsSprite() {
	let width = Number(largeurSpriteInput.value);
	let height = Number(hauteurSpriteInput.value);
	let drawingColor = sprite.drawingColor;

	sprite = new Sprite(width, height);

	sprite.drawingColor = drawingColor;
	sprite.draw();
}

