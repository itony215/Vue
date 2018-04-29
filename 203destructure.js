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
