var chai = require("chai"),
    jsdom = require("jsdom"),
    assert = require('assert'),
    jQuery = require("jQuery");

var expect = require('expect.js');

var window = jsdom.jsdom("<html><body></body></html>").createWindow(),
    document = window.document;

var $ = global.jQuery = jQuery.create(window);


describe('jQuery', function () {
  it('should be initialized', function () {
    expect($).to.be.ok();
  });
});