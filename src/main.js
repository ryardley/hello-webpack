var greet = require('./greet');

var message = greet('Webpack');

console.log(message);

var elem = document.getElementById('main');
elem.innerHTML = '<h1>' + message + '</h1><p>A basic webpack starter for testing basic things</p>';
