'use strict'

var toArray = require('../')
var assert = require('assert')

describe('non-collections', function() {
  describe('converting into arrays', function () {
    it('single element is the function for Functions', function() {
      var func = function(){}
      assert.deepEqual([func], toArray(func));
    })
    it('single element is the number for Numbers', function() {
      assert.deepEqual([12345], toArray(12345));
    })
    it('single element is null for null', function() {
      assert.deepEqual([null], toArray(null));
    })
    it('single element is the regex for Regexps', function() {
      assert.deepEqual([/regexp/], toArray(/regexp/));
    })
    it('single element is the date for Dates', function() {
      var date = new Date()
      assert.deepEqual([date], toArray(date));
    })
    it('single element is the string for Strings', function() {
      assert.deepEqual(['string'], toArray('string'));
    })
  })

  it('array is empty for nothing', function() {
    assert.deepEqual([], toArray());
  })
  it('array is empty for undefined', function() {
    assert.deepEqual([], toArray(undefined));
  })
  it('detects `{length: true}` is not a collection', function() {
    assert.deepEqual([{length: true}], toArray({length: true}));
  })
})

describe('identifying collections', function() {
  it('correctly identifies arrays', function() {
    assert.deepEqual([1, 2], toArray([1, 2]));
    assert.deepEqual([], toArray([]));
  })

  it('correctly identifies arguments objects', function() {
    (function() {
      assert.deepEqual([1, 2], toArray(arguments), 'arguments should be arraylike'); // arguments collection
    })(1, 2)
  })
  it('correctly identifies empty arguments objects', function() {
    (function() {
      assert.deepEqual([], toArray(arguments), 'arguments should be arraylike'); // arguments collection
    })()
  })
  it('won\'t grab numeric indicies if they do not exist', function() {
    var A = function() {}
    A.prototype.length = 4
    var a = new A
    assert.deepEqual([a], toArray(a));
  })
})


;(typeof window === 'undefined' ? describe.skip : describe)('testing against dom', function() {
  var blink1, blink2
  before(function() {
    // pick elements that aren't likely to actually appear on the test page
    blink1 = domify('<blink class="testblink"></blink>')[0]
    blink2 = domify('<blink class="testblink"></blink>')[0]

    document.body.appendChild(blink1)
    document.body.appendChild(blink2)
  })

  after(function() {
    document.body.removeChild(blink1)
    document.body.removeChild(blink2)
  })

  it('detects window is not a collection', function() {
    assert.deepEqual([window], toArray(window));
  })

  it('arrayifys single nodes', function() {
    assert.deepEqual([blink1], toArray(blink1));
  })

  it('detects htmlelement collections are array-like', function() {
    assert.deepEqual([blink1, blink2], toArray(document.getElementsByTagName('blink')));
  })

  it('detects empty collections are array-like', function() {
    assert.deepEqual([], toArray(document.getElementsByTagName('jkbsdf')));
  })

  it('specifically identifies nodelists as a special collection', function() {
    assert.deepEqual([blink1, blink2], toArray(document.querySelectorAll('.testblink'))); // NodeList
  })

  describe('options.query = true', function () {
    it('results in `document.querySelectorAll` being called if the input is a string', function () {

    })
  })
})