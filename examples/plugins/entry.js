var greeter = require('./greeter');
if (DEBUG) {
  console.log('Greeting in "%s"', LANGUAGE);
}
console.log(greeter.greet('John'));
if(module.hot) {
  // accept update of dependency
  module.hot.accept("./greeter.js", function() {
    // replace request handler of server
    greeter = require('./greeter');
    console.log(greeter.greet('John'));
  });
}