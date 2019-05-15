let inputCouleurPersonnalisee;

function getColorFromInput(inputColorElement) {
	let hexa = inputColorElement.value.replace('#', '');

	return new Color(parseInt(hexa.substr(0, 2), 16),
       			parseInt(hexa.substr(2, 2), 16),
				parseInt(hexa.substr(4, 2), 16));
}

function initialiserCouleursPersonnalisees(){
	inputCouleurPersonnalisee = document.getElementById("inputCouleurPersonnalisee");
	inputCouleurPersonnalisee.addEventListener('change', couleurPersonnalisee);
}

function couleurPersonnalisee(){
	
	sprite.addColor(getColorFromInput(inputCouleurPersonnalisee));
	sprite.setDrawingColor(sprite.getLastColorId());
}

