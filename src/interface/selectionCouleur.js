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

let validerButtonColors;

function initialiserCouleurInterface(){
	validerButtonColors = document.querySelectorAll(".selectionCouleurButton");
	
	for(i=0; i<validerButtonColors.length; i++){
		validerButtonColors[i].addEventListener('click', changeDrawingColor);
	}
}

function changeDrawingColor(evt){	
	if(this.id === "preselectionButtonRed"){
		tilemap.setDrawingColor(PixelColors.RED);
	}
	else if(this.id === "preselectionButtonGreen"){
		tilemap.setDrawingColor(PixelColors.GREEN);
	}
	else if(this.id === "preselectionButtonBlue"){
		tilemap.setDrawingColor(PixelColors.BLUE);
	}
	else if(this.id === "preselectionButtonYellow"){
		tilemap.setDrawingColor(PixelColors.YELLOW);
	}
	else if(this.id === "preselectionButtonBlack"){
		tilemap.setDrawingColor(PixelColors.BLACK);
	}
	else if(this.id === "preselectionButtonWhite"){
		tilemap.setDrawingColor(PixelColors.WHITE);
	}
}
