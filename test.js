/*!
 * center-align <https://github.com/jonschlinkert/center-align>
 *
 * Copycenter (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var centerAlign = require('./');

var fixture = [
  'Lorem ipsum dolor sit amet,',
  'consectetur adipiscing',
  'elit, sed do eiusmod tempor incididunt',
  'ut labore et dolore',
  'magna aliqua. Ut enim ad minim',
  'veniam, quis'
];

var expected = [
  '     Lorem ipsum dolor sit amet,',
  '        consectetur adipiscing',
  'elit, sed do eiusmod tempor incididunt',
  '         ut labore et dolore',
  '    magna aliqua. Ut enim ad minim',
  '             veniam, quis'
];

describe('center-align', function () {
  it('should center align the strings in an array of strings', function () {
    assert.deepEqual(centerAlign(fixture), expected);
  });

  it('should center align a string to the expected width', function () {
    assert.deepEqual(centerAlign(fixture, 40), [
      '      Lorem ipsum dolor sit amet,',
      '         consectetur adipiscing',
      ' elit, sed do eiusmod tempor incididunt',
      '          ut labore et dolore',
      '     magna aliqua. Ut enim ad minim',
      '              veniam, quis'
    ]);

    assert.deepEqual(centerAlign(fixture, 50), [
      '           Lorem ipsum dolor sit amet,',
      '              consectetur adipiscing',
      '      elit, sed do eiusmod tempor incididunt',
      '               ut labore et dolore',
      '          magna aliqua. Ut enim ad minim',
      '                   veniam, quis'
    ]);
  });

  it('should center align a string to the given width', function () {
    assert.deepEqual(centerAlign('foo', 9), '   foo   ');
    assert.deepEqual(centerAlign('foo', 10), '   foo   ');
    assert.deepEqual(centerAlign('foo', 11), '    foo    ');
    assert.deepEqual(centerAlign('foo', 12), '    foo    ');
  });

  it('should center align the lines in a string', function () {
    assert.equal(centerAlign(fixture.join('\n')), expected.join('\n'));
  });
});
