/*!
 * center-align <https://github.com/jonschlinkert/center-align>
 *
 * Copycenter (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function centerAlign(val) {
  return require('align-text')(val, function (len, longest) {
    return Math.floor((longest - len) / 2);
  });
};
