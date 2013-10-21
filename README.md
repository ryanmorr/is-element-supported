isTagSupported
=========

Feature test support for HTML elements in JavaScript by comparing an elements internal [[Class]] property to the HTMLUnknownElement interface. Please refer to the [blog post](http://www.ryanmorr.com/determine-html5-tag-support-in-javascript/) to read more.

### Example

To use the method, simply provide an HTML tag.

```javascript
isTagSupported('canvas');

isTagSupported('template');
```
	
The method will return true/false based on the browser's support for the element.	

### Browser Support

There are some [known inconsistencies](http://kangax.github.io/jstests/html5_elements_interfaces_test/) with some tags. However, most are supported in the following browsers:

- Firefox
- Internet Explorer 9+
- Chrome
- Safari
- Opera
- Android
- iOS

### License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).
