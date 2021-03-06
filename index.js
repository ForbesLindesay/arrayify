'use strict'

/**
 * Convert an array-like object into an `Array`.
 * If `collection` is already an `Array`, then will return a clone of `collection`.
 *
 * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
 * @return {Array} Naive conversion of `collection` to a new `Array`.
 * @api private
 */

module.exports = function toArray(collection, options) {
  if (typeof collection === 'string') return (options && options.query ? toArray(document.querySelectorAll(collection)) : [collection])
  if (typeof collection === 'undefined') return []
  if (collection === null) return [null]
  if (typeof window != 'undefined' && collection === window) return [window]
  if (Array.isArray(collection)) return collection.slice()
  if (typeof collection.length != 'number') return [collection]
  if (typeof collection === 'function') return [collection]
  if (collection.length === 0) return []
  var arr = []
  for (var i = 0; i < collection.length; i++) {
    if (collection.hasOwnProperty(i) || i in collection) {
      arr.push(collection[i])
    }
  }
  if (arr.length === 0) return [collection]
  return arr
}