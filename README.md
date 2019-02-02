# isElementSupported

[![Version Badge][version-image]][project-url]
[![Build Status][build-image]][build-url]
[![License][license-image]][license-url]

> Feature test HTML element support in JavaScript

## Install

Download the [development](http://github.com/ryanmorr/is-element-supported/raw/master/dist/is-element-supported.js) or [minified](http://github.com/ryanmorr/is-element-supported/raw/master/dist/is-element-supported.min.js) version, or install via NPM:

``` sh
npm install @ryanmorr/is-element-supported
```

## Usage

To use the method, simply provide a string of an HTML tag name:

```javascript
import isElementSupported from '@ryanmorr/is-element-supported';

// Feature test a known supported element
isElementSupported('div'); //=> true

// Feature test an unsupported element
isElementSupported('foo'); //=> false
```

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/is-element-supported
[version-image]: https://badge.fury.io/gh/ryanmorr%2Fis-element-supported.svg
[build-url]: https://travis-ci.org/ryanmorr/is-element-supported
[build-image]: https://travis-ci.org/ryanmorr/is-element-supported.svg
[license-image]: https://img.shields.io/badge/license-Unlicense-blue.svg
[license-url]: UNLICENSE
