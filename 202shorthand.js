//物件縮寫 3種

// － 屬性縮寫
function makePoint(x, y) {
  return {
    x: x,
    y: y
  };
}

function makePoint(x, y) {
  return {
    x,
    y
  };
}

// － 計算屬性
function createObj(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}
//等於以下
function createObj(key, value) {
  const obj = {
    [key + 1]: value
  };

  return obj;
}
const person = createObj("name", "John");
//{
//  name: 'John',
//}
const cat = createObj("legs", "4");
// {
//   legs:'4',
// }

// － 函式縮寫
const options = {
  name: "Options",
  level: 10,
  created: function() {},
  mounted: function() {}
};
//等於以下
const options = {
  name: "Options",
  level: 10,
  created() {},
  mounted() {},
  beforeCreate() {}
};
