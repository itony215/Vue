//ES6 箭頭函式：
var double = function(x) {
  return x * 2;
};

const double = x => {
  return x * 2;
};

const double = x => x * 2;
// 傳入參數只有一個小括號可省略 兩個或沒有都不行!
//如果function內容只有return一行可以省略{}

//example
arr.map(function(elm, idx) {
  return elm + idx;
});

arr.map((elm, idx) => elm + idx);

//自動綁定： 箭頭函式內部的 this 與外部相同
const a = () => {
  console.log(this);
  const aa = () => {
    console.log(this);
  };
};

var b = function() {
  console.log(this);
};

console.log(this);
//a aa 印出來會跟外面全域一樣 b就要看情況而定

/*
this
 - 是function的context(情境)
 - 直接執行：window(global)
 - 作為物件的成員函式執行，this就是該物件
 - 作為dom的偵聽函式：該dom 
*/
var name = "Heisenburg";

var sayMyName = function() {
  console.log(this.name);
};

var teacher = {
  name: "White"
};
teacher.sayMyName = sayMyName;

sayMyName(); // Heisenburg
teacher.sayMyName(); // White
btn.addEventListener("click", sayMyName); // God damn right
// <button id="btn" name="God damn right">Response</button>

// 箭頭函式裡面的this一定會在他宣告的時候等於外面的this，因為箭頭函式有自動綁定的功能
// 同樣的函式，但是執行的情境（excution context）不同，導致裡面的this不同，執行的結果也不同。
