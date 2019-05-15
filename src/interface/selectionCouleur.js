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
		sprite.setDrawingColor(PixelColors.RED);
	}
	else if(this.id === "preselectionButtonGreen"){
		sprite.setDrawingColor(PixelColors.GREEN);
	}
	else if(this.id === "preselectionButtonBlue"){
		sprite.setDrawingColor(PixelColors.BLUE);
	}
	else if(this.id === "preselectionButtonYellow"){
		sprite.setDrawingColor(PixelColors.YELLOW);
	}
	else if(this.id === "preselectionButtonBlack"){
		sprite.setDrawingColor(PixelColors.BLACK);
	}
	else if(this.id === "preselectionButtonWhite"){
		sprite.setDrawingColor(PixelColors.WHITE);
	}
}
