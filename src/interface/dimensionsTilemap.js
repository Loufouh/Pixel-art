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

let largeurTilemapInput;
let hauteurTilemapInput;

let validerDimensionsTilemapButton;

function initialiserInterfaceDimensionsTilemap() {
	largeurTilemapInput = document.getElementById("numberPixelLargeurInput") ;
	hauteurTilemapInput = document.getElementById("numberPixelHauteurInput") ;
	validerDimensionsTilemapButton = document.getElementById("validerDimensionsTilemapButton");

	validerDimensionsTilemapButton.addEventListener('click', validerDimensionsTilemap);
}

function validerDimensionsTilemap() {
	let width = Number(largeurTilemapInput.value);
	let height = Number(hauteurTilemapInput.value);
	let drawingColor = tilemap.drawingColor;

	tilemap = new Tilemap(width, height);

	tilemap.drawingColor = drawingColor;
	tilemap.draw();
}

function initialiserTilemap(){
	if(Number(hauteurTilemapInput.value) < 1 || Number(largeurTilemapInput.value) < 1 ){
		tilemap = new Tilemap(10, 10);
	}
	else{   
		tilemap = new Tilemap(Number(largeurTilemapInput.value),Number(hauteurTilemapInput.value));
	}
}
