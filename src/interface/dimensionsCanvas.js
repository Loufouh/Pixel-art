let hauteurCanvasInput;
let largeurCanvasInput;
let validerDimensionsCanvasButton;

// Louis et Maxence 
function initialiserInterfaceDimensionsCanvas(){
	hauteurCanvasInput = document.getElementById("hauteurCanvasInput");
	largeurCanvasInput = document.getElementById("largeurCanvasInput");

	validerDimensionsCanvasButton = document.getElementById("validerDimensionsCanvasButton");
	validerDimensionsCanvasButton.addEventListener('click', validerDimensionsCanvas);
}	

// Maxence
function validerDimensionsCanvas() {
	canvas.width = largeurCanvasInput.value;
	canvas.height = hauteurCanvasInput.value;

	background(new Color(0));
	sprite.draw();
}
