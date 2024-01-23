# isElementSupported

[![Version Badge][version-image]][project-url]
[![License][license-image]][license-url]
[![Build Status][build-image]][build-url]

> Feature test HTML element support

## Install

Download the [CJS](https://github.com/ryanmorr/is-element-supported/raw/master/dist/cjs/is-element-supported.js), [ESM](https://github.com/ryanmorr/is-element-supported/raw/master/dist/esm/is-element-supported.js), [UMD](https://github.com/ryanmorr/is-element-supported/raw/master/dist/umd/is-element-supported.js) versions or install via NPM:

``` sh
npm install @ryanmorr/is-element-supported
```

## Usage

Detect support for an HTML element by providing the tag name:

```javascript
import isElementSupported from '@ryanmorr/is-element-supported';

// Feature test a known supported element
isElementSupported('div'); //=> true

// Feature test an unsupported element
isElementSupported('foo'); //=> false
```

**Note:** SVG and MathML tags are not supported.

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).

[project-url]: https://github.com/ryanmorr/is-element-supported
[version-image]: https://img.shields.io/github/package-json/v/ryanmorr/is-element-supported?color=blue&style=flat-square
[build-url]: https://github.com/ryanmorr/is-element-supported/actions
[build-image]: https://img.shields.io/github/actions/workflow/status/ryanmorr/is-element-supported/node.js.yml?style=flat-square
[license-image]: https://img.shields.io/github/license/ryanmorr/is-element-supported?color=blue&style=flat-square
[license-url]: UNLICENSE
