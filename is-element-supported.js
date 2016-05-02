/*
 * isElementSupported
 * Feature test HTML element support 
 * @param {String} tag
 * @return {Boolean|Undefined}
 */

(function(win){
    'use strict';       

    var toString = {}.toString;

    win.isElementSupported = function isElementSupported(tag) {
        // Return undefined if `HTMLUnknownElement` interface
        // doesn't exist
        if (!win.HTMLUnknownElement) {
            return undefined;
        }
        // Create a test element for the tag
        var element = document.createElement(tag);
        // Check for support of custom elements registered via
        // `document.registerElement`
        if (tag.indexOf('-') > -1) {
            // Registered elements have their own constructor, while unregistered
            // ones use the `HTMLElement` or `HTMLUnknownElement` (if invalid name)
            // constructor (http://stackoverflow.com/a/28210364/1070244)
            return (
                element.constructor !== window.HTMLUnknownElement &&
                element.constructor !== window.HTMLElement
            );
        }
        // Obtain the element's internal [[Class]] property, if it doesn't 
        // match the `HTMLUnknownElement` interface than it must be supported
        return toString.call(element) !== '[object HTMLUnknownElement]';
    };
    
})(this);
