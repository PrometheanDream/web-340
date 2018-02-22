var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=smith');

console.log(parsedURL.protocol); // each log pulls a part of the above url and logs it.
console.log(parsedURL.host);
console.log(parsedURL.query);