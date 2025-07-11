// 1.对象内建方法
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,

//     // 公共方法：获取所有非函数属性值
//     _getValues() {
//         return Object.getOwnPropertyNames(this)
//             .filter((key) => typeof this[key] !== "function")
//             .map((key) => this[key]);
//     },

//     valueOf() {
//         // 明确指定 reduce 初始值为 0，确保返回数字
//         return this._getValues().reduce((sum, val) => sum + val, 0);
//     },

//     toString() {
//         // 确保返回字符串
//         return this._getValues().join("哈哈");
//     },
// };
// console.log(+obj); // 输出 6 (1+2+3)
// console.log(`${obj}`); // 输出 "1哈哈2哈哈3"
// console.log(Object.getOwnPropertyNames(obj));

// 2.Number处理特殊值的情况
// let a = Number(undefined);
// let b = Number(null);
// let c = Number({});
// let res = null == 0;
// console.log(a, b, c);
// console.log(res);
// const arr = [10, 20, 30];
// arr.foo = "bar"; // 添加非数字属性
// console.log(arr);
// const _arr = arr.map((item) => item);
// console.log(_arr);
// for (const i in arr) {
//     console.log(i);
// }

// 3.标记和break/continue的表现
// outerLoop: for (let i = 0; i < 3; i++) {
//     innerLoop: for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             break outerLoop; // 直接跳出最外层循环
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }
// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) {
//             continue outer; // 跳过外层循环的当前i迭代
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }
// outer: for (let i = 0; i < 3; i++) {
//     inner: for (let j = 0; j < 3; j++) {
//         if (j === 1) {
//             continue inner; // 跳过外层循环的当前i迭代
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }

// 5.1 Date
// let a = new Date(2020, 0, 5);
// a;
// let b = new Date(Date.UTC(2020, 0, 5));
// b;
// let c = new Date(Date.now());
// c;
// let d = a.getDay();
// d;
// let e = a.getMonth();
// e;
// let f = a.getDate();
// f;

// let g = new Date(2020, 0, 1);
// g;
// let h = g.toLocaleDateString("zh-cn");
// h;

// let i = new Date(Date.UTC(2020, 0, 1));
// i;
// let j = i.getUTCHours();
// j;

// let k = new Date();
// let l = k.toLocaleString();
// l;

// 5.2 RegExp
// let pattern1 = /(\d+)㎡/g;
// let str1 = "面积:125㎡, :3000㎡";
// let res1 = [...str1.matchAll(pattern1)].map((i) => i[1]);
// res1;
// console.log(res1 instanceof Array);

// let res2 = pattern1.exec(str1);
// res2;

// let re1 = /(?<year>\d+)-(?<month>\d+)-(?<day>\d+)(:(?<备注>[\u4e00-\u9fa5]+))?/;
// let text = "2018-05-05:这是很特别的一天";
// let res3 = re1.exec(text);
// res3;
// console.log(res3.groups);

// let re2 = /.at/g;
// // let re2 = /.at/y; // y开启黏着模式,立刻就地开始检测,失败后从0开始,他会覆盖g
// let text2 = "cat,bat,gat,";
// let result = re2.exec(text2);
// result;
// result = re2.exec(text2);
// result;
// result = re2.exec(text2);
// result;
// let test = re2.test(text2);
// test; //这里会失败,因为每次执行exec会往前推进index,现在index已经进行到11了,也就是最后的,那肯定对不上,下文就对的上
// let _test = re2.test(text2);
// _test; // 这里又对了,第一次 test() 失败后 ​自动重置了 lastIndex 为 0,于是从头开始找,找到了cat,对上了

// let re3 = /.at/g;
// let text3 = "cat,bat,gat,";
// let __test = re3.test(text3);
// __test; // 直接test也是对的

// 5.3;

// let s1 = new String("etrsdsss");
// let s2 = s1.substring(0, 2);
// s1.color = "red";
// s2.color = "blue";
// console.log(s1.color);
// console.log(s2.color);

// let falseObject = new Boolean(false);
// let falseValue = true;
// console.log(typeof falseObject);
// console.log(typeof falseValue);
// console.log(falseObject instanceof Boolean);
// console.log(falseValue instanceof Boolean);

// let num = 22;
// let res = num.toString(2);
// res;

// let str = "12😊345";
// console.log(str.length);
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.codePointAt(2));
// console.log(str.codePointAt(3));
// console.log(String.fromCodePoint(98, 128522, 100));
// console.log([...str]);
// // 这里的split的行为,是将非逗号词作为分割词,[]内的^代表否定的意思
// let colorText = "red,yellow,blue,green,yellow";
// let color3 = colorText.split(/[^,]+/);
// color3;
// // localeCompare挺好用,比较中文的时候记得用zh-Hans-CN参数,但Intl支持性更好,
// let str1 = "yellow";
// let str2 = "zoo";
// console.log(str1.localeCompare(str2));
// let str3 = "呢";
// let str4 = "那";
// console.log(str3.localeCompare(str4, "zh-Hans-CN"));

// const collator = new Intl.Collator("zh-Hans-CN");
// console.log(collator.compare("呢", "那"));

// 5.4;
// // 浏览器直接把window对象实现为Global,所有全局作用域的函数和变量都变成window属性
// var color = "red";
// function sayColor() {
//     console.log(window.color);
// }
// window.sayColor(); // 这里期望结果为'red'

// // 这里quokka的打印行为有问题,应该展开来是1 2 3 4 5
// let arr = [1, 2, 3, 4, 5];
// let resmath = Math.max(...arr);
// console.log(...arr);
// resmath;
// // Math.random()返回[0,1)之间的值
// // 下面的写法会获得1-10之间的数
// let random = Math.floor(Math.random() * 10 + 1);
// random;
// // 下面的写法会获得5-13之间的数
// let random2 = Math.floor(Math.random() * 9 + 5);
// random2;
// // 参考上例写一个function
// const utilSelectFrom = (lowerNum = 0, upperNum = 10) => {
//     // 1. 检查参数是否为数字
//     if (typeof lowerNum !== "number" || typeof upperNum !== "number") {
//         throw new TypeError(`参数必须为数字`);
//     }
//     // 2. 检查 lowerNum <= upperNum
//     if (lowerNum > upperNum) {
//         throw new RangeError(`下限值 ${lowerNum} 不能大于上限值 ${upperNum}`);
//     }
//     return Math.floor(Math.random() * (upperNum - lowerNum + 1) + lowerNum);
// };
// console.log(utilSelectFrom(2, 10)); // 这个函数会获得2-10之间的数

// 6.2
// Array.from()
arr = Array("H").fill(3);
arr;
arr2 = Array.from("Now");
arr2;
// set
set = new Set();
set.add(2);
set.add(1);
set;
arr3 = Array.from(set);
arr3;
// map
map = new Map();
map.set(1, 2);
map.set(3, 4);
map;
arr4 = Array.from(map);
arr4;
// Array.from(arguments)
function getArgs() {
    return Array.from(arguments);
}
res = getArgs(1, 2, 3, 4);
res;
// 空数组[,,,,]
const options = [1, , , , 5];
options;
const a = Array.from([, , ,]);
a;
const b = options.join("-");
b;
// length
const colors = ["red", "blue", "yellow"];
colors.length = 2;
colors;
colors.length = 5;
colors;
colors[10] = "gray";
colors;
// key() value() entries()
const know = ["header", "main", "footer"];
const keys = Array.from(know.keys());
keys;
const values = Array.from(know.values());
values;
const entries = Array.from(know.entries());
entries;
// fill()
const fill = Array(6).fill(3);
fill;
fill.fill(6, 3);
fill;
fill.fill(7, 1, 3);
fill;
fill.fill(8, -3, -1);
fill;
fill.fill(10, 10, 12);
fill;
fill.fill(10, 1, 10);
fill;
fill.fill(10, -10, -1);
fill;
// copywithin(target,start,end)
copy = Array.from(Array(10).fill(0).entries()).map(([key, value]) => key);
copy;
copy.copyWithin(3); // 把原数组复制到索引3
copy;
copy.copyWithin(3, 5); // 把索引5开始的元素复制到索引3
copy;
copy.copyWithin(3, 5, 6); // 把索引5-6[5,6)的元素复制到索引3
copy;
copy.copyWithin(0, -2, -1); // 和fill一样支持负数索引
copy;
copy.copyWithin(0, 10, 12); // 和fill一样,超出部分无视
copy;
copy.copyWithin(0, 8, 12); // 和fill一样,部分覆盖则部分复制
copy;

// [...]扩张操作符
arr1 = [1, 2, 3];
// 扩展操作出来的数组是全新的数组
arr11 = [...arr1];
console.log(arr1 === arr11); //
arr11[0] = 99;
arr11;
arr1;
// 扩展操作出来的数组是全新的数组,但是浅拷贝的数组,直接修改属性依旧会影响原对象
arr0 = [{ name: "alice" }, { age: 25 }];
arr00 = [...arr0];
console.log(arr0 === arr00); //
arr00[0].name = "Bob";
arr00;
arr0;
arr00[0] = { ...arr00[0], name: "Mock" };
arr00;
arr0;
// 使用现代structuredClone
clone = [{ name: "Michael" }, { age: 235 }];
clone0 = structuredClone(clone);
clone0[0].name = "Nancy";
clone0;
clone;
// 扩展符合并和...rest剩余符
arr2 = [3, 4, 5];
arr3 = [...arr1, ...arr2.slice(0, 2)]; //注意扩展符后依旧可以用slice()
arr3;
let [first, second, ...rest] = arr3;
first;
second;
rest;
