// ES6 箭頭函式：
// this 一定會指向被宣告的地方的this

// this
// 是function的context(情境)

// this (function(){})

// - 直接執行：window(global)

// - 作為物件的成員函式執行，this就是該物件

// - 作為dom的偵聽函式：該dom
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
