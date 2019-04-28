"use strict";

function error(message, returnValue, logger=console.error) {
	logger(message);
	return returnValue;
}

