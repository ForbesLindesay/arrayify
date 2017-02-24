# arrayify

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/arrayify.svg)](https://greenkeeper.io/)

Convert array like items or individual items into arrays (for both browser and server)

[![Build Status](https://img.shields.io/travis/ForbesLindesay/arrayify/master.svg)](https://travis-ci.org/ForbesLindesay/arrayify)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/arrayify.svg)](https://david-dm.org/ForbesLindesay/arrayify)
[![NPM version](https://img.shields.io/npm/v/arrayify.svg)](https://www.npmjs.com/package/arrayify)

## Installation

    npm install arrayify

## Usage

```js
// Array-likes
var divs = document.getElementsByTagName('div') // `NodeList` of `HTMLDivElement`
toArray(divs) // => Array of `HTMLDivElement`

(function() {
  toArray(arguments) // => [1, 2]
})(1, 2)

// Primitives
toArray('hello') // => ['hello']
toArray(12345) // => [12345]
toArray(/regex/) // => [/regex/]
toArray(null) // => [null]
toArray({}) // => [{}]
toArray(new Date) // => [Wed Nov 07 2012 04:40:26 GMT+1000 (EST)]

// Special cases
toArray(undefined) // => []
toArray(window) // => [window]
toArray('a.important', {query: true}) // => [DOM elements matching the query selector 'a.important']
```

## License

This library is based off of work by [@timoxley](https://github.com/timoxley) on the [to-array component](https://github.com/timoxley/to-array) which is MIT licensed.

This library is therefore also MIT licensed.
