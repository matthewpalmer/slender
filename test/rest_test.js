//Maybe the DOM stuff could be moved to the actual file
var chai = require("chai"),
    jsdom = require("jsdom"),
    assert = require('assert'),
    jQuery = require("jQuery"),
    expect = require('expect.js');
var window = jsdom.jsdom("<html><body></body></html>").createWindow(),
    document = window.document;
var $ = global.jQuery = jQuery.create(window);

var rest = require('../src/rest.js');

describe('REST interactions', function() {
  it('should perform a GET', function(done) {
    rest.get('https://www.google.com/finance/info?&q=NASDAQ:AAPL', function(response) {
      console.log(response); //remove soon
      expect(response).to.be.ok();
      done();
    });
  });
    it('should perform a POST', function(done) {
    rest.post('URL', 'DATA', function(response) {
      console.log(response); //remove soon
      expect(response).to.be.ok();
      done();
    });
  });
  it('should perform a PUT', function(done) {
    rest.put('URL', 'DATA', function(response) {
      console.log(response); //remove soon
      expect(response).to.be.ok();
      done();
    });
  });
  it('should perform a DELETE', function(done) {
    rest.del('URL', 'DATA', function(response) {
      console.log(response); //remove soon
      expect(response).to.be.ok();
      done();
    });
  });
});