//解構賦值Destructuring assignment
const nums = [1, 2, 3];

//原本的方式
const first = nums[0];
const second = nums[1];
//解構賦值
const [first, second, third] = nums;

let first;
let second;

[first, second] = nums; //賦值，第三個不管
//做運算
const result = first * second;
console.log(result);

const [first, second, third = 0] = nums; //預設值
const [, second] = nums; //利用逗號去忽略元素;
const [, , third] = nums;

//變數交換
let a = 1;
let b = 2;

let tmp = a;
a = b;
b = tmp;
//只要一行
[a, b] = [b, a];

//剩餘部分
const nums = [1, 2, 3, 4];

const [first, ...others] = nums;
// first === 1;
// others === [2,3,4];

//物件解構
const point = {
  x: 100,
  y: 150
};

const x = point.x;
const y = point.y;

//只需一行
const { x, y } = point;

//記法 陣列宣告時本來就是用中括號 物件為大括號
const arr = [];
const obj = {};
//陣列解構
const [first, second, third] = nums;
//物件解構
const { x, y } = point;

const { x, y, z = 0 } = point; //預設值
const { x: px, y } = point; //解構出來重新命名為px

//解構函式參數
function distance(point) {
  return Math.sqrt(point.x * point.x + point.y * point.y);
}
//簡化為
function distance(point) {
  const { x, y } = point;
  return Math.sqrt(x * x + y * y);
}
//可以直接在參數解構，也可以給 預設值 跟 參數重命名
function distance({ x, y = 0 }) {
  return Math.sqrt(x * x + y * y);
}
