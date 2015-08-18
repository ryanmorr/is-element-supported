# isElementSupported

Feature test support for HTML elements in JavaScript by examining an element's internal [[Class]] property to reveal the interface from which it inherits. Unsupported elements derive from the generic `HTMLUnknownElement` interface. Please refer to the [blog post](http://www.ryanmorr.com/determine-html5-element-support-in-javascript/) to read more, or see a [working example](http://codepen.io/ryanmorr/full/EaWROJ/).

## Usage

To use the method, simply provide a string of an HTML tag name:

```javascript
// Feature test the dialog element
isElementSupported('dialog');

// Feature test the template element
isElementSupported('template');
```
The function will return true for supported elements, false for unsupported elements, and undefined for browsers that do not support the `HTMLUnknownElement` interface.

## Browser Support

* Chrome *
* Firefox *
* Opera *
* Safari *
* Internet Explorer 9+
* Android *
* iOS *

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).
