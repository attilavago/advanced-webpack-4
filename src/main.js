require("@babel/runtime/regenerator");
require("./main.css");
require("./index.html");

const a = async (args) => {
  const {a, b} = args;
  await console.log('hello from the future', a, b);
  console.log('after await');
}

a({a: 1, b: 2});
