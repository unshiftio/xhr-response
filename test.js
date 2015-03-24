describe('xhr-response', function () {
  'use strict';

  var assume = require('assume')
    , response = require('./');

  it('is exported as a function', function () {
    assume(response).is.a('function');
  });
});
