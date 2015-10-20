var bar = require('./bar');

exports.foo = function foo() {
  return "Foo";
};

exports.foobar = function() {
  console.log(foo() + bar());
};
