# isElementSupported

Feature test support for HTML elements currently defined in the specification as well as custom elements registered via `document.registerElement`. Please refer to the [blog post](http://www.ryanmorr.com/determine-html5-element-support-in-javascript/) to read more, or see a [working example](http://ryanmorr.github.io/demos/is-element-supported/).

## Usage

To use the method, simply provide a string of an HTML tag name:

```javascript
// Feature test the dialog element
isElementSupported('dialog');

// Feature test the template element
isElementSupported('template');

// Feature test custom elements
isElementSupported('custom-element'); // false
document.registerElement('custom-element');
isElementSupported('custom-element'); // true
```
The function will return true for natively supported elements as well as registered custom elements, false for unsupported elements and unregistered custom elements, and undefined for browsers that do not support the `HTMLUnknownElement` interface.

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
