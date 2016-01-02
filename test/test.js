'use strict';

var expect = require('chai').expect;
var cipher = require('../index');

describe('#cipher', function () {
	it('should encode string', function() {
		var result = cipher("FREE");
		expect(result).to.equal('SERR');
	});
	it('should encode lowercase words', function() {
		var result = cipher("free");
		expect(result).to.equal('SERR');
	});
	it('should encode lowercase words', function() {
		var result = cipher("SERR-PIZZA!");
		expect(result).to.equal('FREE-CVMMN!');
	});
	it('should encode lowercase words', function() {
		var result = cipher("free cvmmn!");
		expect(result).to.equal('SERR PIZZA!');
	});
});