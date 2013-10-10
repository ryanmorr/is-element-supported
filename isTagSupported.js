/*
 * isTagSupported
 * Feature test HTML tag support 
 * @param {String} tag The tag being tested
 * @return {Boolean} True or false based on results of the test
 */

(function(win){
	"use strict";		
	
	//Define common variables
	var cache = {}, doc = win.document, objectToString = win.Object.prototype.toString;
	
	//Define the function
	win.isTagSupported = function(tag){
		//Check the cache
		if(tag in cache){
			//If the tag is found in the cache, return the result
			return cache[tag];	
		}
		//Create a test element for the tag
		var element = doc.createElement(tag);
		//Obtain the element's internal [[Class]] property, if it doesn't match the HTMLUnknownElement interface than it must be supported
		//Cache and return the result
		return cache[tag] = (objectToString.call(element) !== '[object HTMLUnknownElement]');
	};
	
})(this);
