/*!
 * center-align <https://github.com/jonschlinkert/center-align>
 *
 * Copycenter (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var should = require('should');
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

describe('centerAlign', function () {
  it('should center align the strings in an array of strings:', function () {
    centerAlign(fixture).should.eql(expected);
  });

  it('should center align the lines in a string:', function () {
    centerAlign(fixture.join('\n')).should.eql(expected.join('\n'));
  });
});
