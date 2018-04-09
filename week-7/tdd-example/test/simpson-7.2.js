/* Contributors: Richard Krasso, William Simpson
    Purpose: To split a string separated by commas into an array */
var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});

