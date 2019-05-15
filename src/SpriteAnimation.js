'use strict';

class SpriteAnimation {
	constructor(frameRate=1) {
		if(frameRate <= 0) {
			error('frameRate is negative or zero => affected to 1.', 1, console.warn);
			frameRate = 1;
		}
	
		this.sprites = [];
		this.frameRate = frameRate;
	}

	insertSprite(sprite, index) {
		if(index < 0) {
			error('index is negative => sprite will be inserted at 0.', -1, console.warn);
			this.sprites.splice(0, 0, sprite);
			
			return;
		}
	
		if(index > this.sprites.length) {
			error('index is too big => sprite will be add at the end.', -1, console.warn);
			this.addSprite(sprite);

			return;
		}

		this.sprites.splice(index, 0, sprite);
	}
	
	addSprite(sprite) {
		this.sprites.push(sprite);
		return this;
	}

	removeSprite(index) {
		this.sprites.splice(index, 1);
	}

	getSprite(index) {
		return this.sprites[index];
	}

	getFrameRate() {
		return this.frameRate;
	}

	getSprites() {
		return this.sprites;
	}
	
	getLength() {
		return this.sprites.length;
	}
}
