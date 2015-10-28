var mod = require('./bar');

exports.foo = function foo() {
  return "Foo";
};

exports.foobar = function() {
  console.log(mod.bar());
};
