'use strict';

class Asserter {
	constructor(logger) {
		this.loggers = new Set();
		this.addLogger(console.error);

		for(let i = 0; i < arguments.length; i++)
			this.addLogger(arguments[i]);
	}

	assertArrayNotSame(expected, actual, message='expected and actual are the same.') {
		if(expected.length !== actual.length)
			return;

		for(let i = 0; i < expected.length; i++) {
			if(expected[i] !== actual[i])
				return;
		}
		this.fail(message);
	}

	assertArraySame(expected, actual, message='expected and actual are not the same.') {
		if(expected.length !== actual.length) {
			this.fail(message);
			return;
		}

		for(let i = 0; i < expected.length; i++) {
			if(expected[i] !== actual[i]) {
				this.fail(message);
				return;
			}
		}
	}

	assertArrayNotEquals(expected, actual, message='expected and actual are equal.') {
		if(expected.length !== actual.length)
			return;

		for(let i = 0; i < expected.length; i++) {
			if(expected[i] != actual[i])
				return;
		}
		this.fail(message);
	}

	assertArrayEquals(expected, actual, message='expected and actual are not equal.') {
		if(expected.length !== actual.length) {
			this.fail(message);
			return;
		}

		for(let i = 0; i < expected.length; i++) {
			if(expected[i] != actual[i]) {
				this.fail(message);
				return;
			}
		}
	}

	assertNotUndefined(actual, message='actual is undefined.') {
		if(!actual)
			this.fail(message);
	}

	assertUndefined(actual, message='actual is not undefined.') {
		if(actual)
			this.fail(message);
	}

	assertNotNull(actual, message='actual is null.') {
		if(actual === null)
			this.fail(message);
	}

	assertNull(actual, message='actual is not null.') {
		if(actual !== null)
			this.fail(message);
	}

	assertNotSame(expected, actual, message='expected and actual are the same.') {
		if(expected === actual)
			this.fail(message);
	}
	
	assertSame(expected, actual, message='expected and actual are not the same.') {
		if(expected !== actual)
			this.fail(message);
	}
	
	assertNotEquals(expected, actual, message='expected and actual are equal.') {
		if(expected == actual)
			this.fail(message);
	}
	
	assertEquals(expected, actual, message='expected and actual are not equal.') {
		if(expected != actual)
			this.fail(message);
	}
	
	assertFalse(condition, message='condition is true.') {
		if(condition)
			this.fail(message);
	}
	
	assertTrue(condition, message='condition is false.') {
		if(!condition)
			this.fail(message);
	}

	fail(message) {
		try {
			throw new Error(message);
		} catch(e) {
			this.log(`Test failed: ${e.message}`);
		}
	}

	log(message) {
		this.loggers.forEach( (logger) => logger(message) );
	}

	addLogger(logger) {
		this.loggers.add(logger);
	}

	deleteLogger(logger) {
		this.loggers.delete(logger);
	}

}
