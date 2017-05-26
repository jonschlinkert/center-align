/*!
 * center-align <https://github.com/jonschlinkert/center-align>
 *
 * Copycenter (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var repeat = require('repeat-string');
var align = require('align-text');

module.exports = function(val, width) {
  if (typeof width === 'number' && typeof val === 'string' && !/\n/.test(val)) {
    var padding = Math.floor((width - val.length) / 2);
    return repeat(' ', padding) + val + repeat(' ', padding);
  }

  return align(val, function(len, longest) {
    if (typeof width === 'number') {
      return Math.floor((width - len) / 2);
    }
    return Math.floor((longest - len) / 2);
  });
};
