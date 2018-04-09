/* Contributors: Richard Krasso, William Simpson
    Purpose: To split a string separated by commas into an array */

var fruits = require("../simpson-fruits");

var chai = require("chai");
var assert = chai.assert;


describe("fruits", function() {

    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });

});