// 10X 只是六角學院的練習

let colors = ['yello', 'blue', 'red', 'pink'];

//刪除第三筆陣列元素，僅刪除一筆
colors.splice(2, 1);
console.log(colors);

//indexOf 詢問第一筆相符資料的索引
console.log(colors.indexOf('pink'));

// splice 用法
colors.splice(colors.indexOf('blue'));
console.log(colors);
// 沒接刪除個數就是後面全刪