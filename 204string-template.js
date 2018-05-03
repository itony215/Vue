//字串模板 String template
function greet(name) {
  console.log("Hello, " + name + "!");
  console.log(`Hello, ${name}!`);
}
// backtick `

greet("Jack");
// Hello, Jack!
// Hello, Jack!

//表達式(Expression)：用小括號包起來
// Ex. (1+2) (a+2)

// 陳述式(Statement)：用小括號包起來沒有意義的
// Ex. const a

// 字串模板可以塞入表達式
function greet(name, days) {
  const hours = days * 24;
  console.log(`Hello, ${name}! It's been ${hours} hours`);
}

function greet(name, days) {
  console.log(`Hello, ${name}! It's been ${days * 24} hours`);
}

function greet(name, days) {
  console.log(`Hello, ${name}! ${days < 7 ? "" : "Long time no see"}`);
}

greet("Jack", 3);
// Hello, Jack!
greet("Jack", 11);
// Hello, Jack! Long time no see

//字串模板可用於多行字串
const words = `
dddddd
ddddddd
dddddddd
`;
