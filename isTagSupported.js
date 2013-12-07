/*
 * isTagSupported
 * Feature test HTML tag support 
 * @param {String} tag
 * @return {Boolean}
 */

(function(win){
	'use strict';		
	
	// Define common variables
	var cache = {}, doc = win.document, objectToString = win.Object.prototype.toString;
	
	// Define the function globally
	win.isTagSupported = function(tag){
		// Check the cache
		if(tag in cache){
			// If the tag is found in the cache, return the result
			return cache[tag];	
		}
		// Create a test element for the tag
		var element = doc.createElement(tag);
		// Obtain the element's internal [[Class]] property, if it doesn't match the HTMLUnknownElement 
		// interface than it must be supported, then cache and return the result
		return cache[tag] = (objectToString.call(element) !== '[object HTMLUnknownElement]');
	};
	
})(this);
