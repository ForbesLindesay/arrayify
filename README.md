# arrayify

Convert array like items or individual items into arrays (for both browser and server)

[![Build Status](https://travis-ci.org/ForbesLindesay/arrayify.png?branch=master)](https://travis-ci.org/ForbesLindesay/arrayify)
[![Dependency Status](https://gemnasium.com/ForbesLindesay/arrayify.png)](https://gemnasium.com/ForbesLindesay/arrayify)
[![NPM version](https://badge.fury.io/js/arrayify.png)](http://badge.fury.io/js/arrayify)

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
