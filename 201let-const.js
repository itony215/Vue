// var 全域 和 let const 作用域不同
for (let i = 0; i < 3; i++) {
  let i = 10;
  console.log(i);
} //作用域的關係 兩個i是可以跑的 但寫作風格上不允許這樣寫

//提升(hoisting) function可以先執行再宣告

// const 不能重新指定值，但可修改裡面內容
const c = { x: 0 };
c.x = 3;
