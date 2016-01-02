'use strict';

var expect = require('chai').expect;
var cipher = require('../index');

describe('#cipher', function () {
	it('should encode string', function() {
		var result = cipher("FREE");
		expect(result).to.equal('SERR');
	});
});