/*Set和Map数据结构*/
//Set结构类似数组，但是成员的☞都是唯一的,没有重复的值
//通过add方法向Set结构加入成员
/*const s = new Set();
[2,3,4,4,5,2,3].forEach(x => s.add(x));
for(let i of s){
    console.log(i);     //2 3 4 5
}*/

/*const set = new Set([1,2,3,3,4]);
console.log([...set]);
console.log(set.size);*/

//数组去重:在Set内部,两个NaN是相等的，两个对象总是不相等的
/*var arr1 = ["chen", "hai", "hai", "chen", NaN, NaN, {}, {}];
var arr2 = [...new Set(arr1)];
console.log(arr2);      //[ 'chen', 'hai', NaN, {}, {} ]

function dedupe(array){
    return Array.from(new Set(array));
}
console.log(dedupe([1,1,2,3]));*/

/*Set实例的属性和方法*/
//add(value):添加某个值，返回Set结构本身
//has(value):返回一个布尔值，表示该值是否为Set的成员
//delete(value):删除某个值，返回一个布尔值，表示删除是否成功
//clear():清除所有成员，没有返回值
/*var s = new Set();
s.add(1).add(2).add(2);
console.log(s.size);    //2

console.log(s.has(2));  //true

s.delete(2);
console.log(s.has(2));  //false

s.clear();
console.log(s);         //Set {}*/

//Array.from方法可以将Set结构转为数组
/*const items = new Set([1,2,3,3,2,1]);
const array = Array.from(items);
console.log(array);*/


/*遍历操作
* keys():返回键名的遍历器
* values():返回键值的遍历器
* entries():返回键值对的遍历器
* */
/*let set = new Set(["red", "green", "blue"]);
console.log(set.keys());    //SetIterator { 'red', 'green', 'blue' }
console.log(set.values());  //SetIterator { 'red', 'green', 'blue' }
console.log(set.entries()); //SetIterator { [ 'red', 'red' ], [ 'green', 'green' ], [ 'blue', 'blue' ] }*/

//forEach():使用回调函数遍历每个成员
// let set = new Set([1,2,3]);
// set.forEach((value, key, set) => console.log(value*2, key, set));
// value:键值  key:键名  set:集合本身

//遍历的应用
//扩展运算符(...)内部使用for...of循环，所以也可以用于Set结构
/*let set = new Set([1,2,3]);
set = new Set([...set].map(x => x*2));
console.log(set);       //Set { 2, 4, 6 }*/

/*let set = new Set([1,2,3,4,5]);
set = new Set([...set].filter(x => (x%2) == 0));
console.log(set);       //Set { 2, 4 }*/

//实现并集、交集、差集
/*let a = new Set([1,2,3]);
let b = new Set([4,3,2]);
//并集
let union = new Set([...a, ...b]);
console.log(Array.from(union));     //[ 1, 2, 3, 4 ]
//交集
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(Array.from(intersect)); //[ 2, 3 ]
//差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(Array.from(difference));//[ 1 ]*/


/*WeakSet
* WeakSet的成员只能是对象
* WeakSet中得应用都是弱引用
* */
// const ws = new WeakSet([1,2,3]);    //TypeError: Invalid value used in weak set

/*const a = [[1,2,3], [3,4,5]];
const ws = new WeakSet(a);
console.log(ws);    //WeakSet {}*/

/*const ws = new WeakSet();
const obj = {name: "chen"};
const foo = {name: "hai"};
ws.add(obj);
console.log(ws.add(foo));       //WeakSet {}
console.log(ws.has(obj));       //true
console.log(ws.delete(obj));    //true
console.log(ws.has(obj));       //false*/


/*Map
* 类似于对象，也是键值对的集合，但键可以是各种类型的值（包括对象），而不仅限于字符串
* */
/*const m = new Map();
const o = {name:"hai"};
m.set(o, "content");
console.log(m.get(o));  //content
console.log(m);         //Map { { name: 'hai' } => 'content' }*/

//Map函数接收一个数组作为参数，该数组的成员是一个个表示键值对的数组
/*const arr = [["name","hai"], ["age",24]];
const map = new Map(arr);
console.log(map);       //Map { 'name' => 'hai', 'age' => 24 }
console.log(map.size);  //2
console.log(map.has("name"));   //true
console.log(map.get("name"));   //hai*/


/*实例的属性和操作方法*/
//size属性
/*const map = new Map();
map.set("name", "hai");
map.set("age", 24);
console.log(map.size);      //2*/

//set(key, value),返回的是整个Map结构，所以可以采用链式写法
//get(key),返回对应的value，找不到Key则返回undefined
//has(key),返回一个布尔值，表示某个键是否在当前Map对象
//delete(key),返回一个布尔值，表示删除成功与否
//clear(),清除所有成员，没有返回值
/*let map = new Map()
    .set("name", "chen")
    .set(123, 456)
    .set(undefined, undefined);
console.log(map);   //Map { 'name' => 'chen', 123 => 456, undefined => undefined }

console.log(map.get("name"));   //chen
console.log(map.get("123"));    //undefined

console.log(map.has(undefined));//true
console.log(map.has("foo"));    //false

console.log(map.delete(undefined)); //true
console.log(map);   //Map { 'name' => 'chen', 123 => 456 }

console.log(map.clear());   //undefined
console.log(map)            //Map {}*/


/*遍历方法
* keys():返回键名的遍历器
* values():返回键值的遍历器
* entries():返回所有成员的遍历器
* */
/*const map = new Map([["name", "hao"], ["age", 21]]);
console.log(map.keys());    //MapIterator { 'name', 'age' }

console.log(map.values());  //MapIterator { 'hao', 21 }

for(let item of map.entries()){
    console.log(item[0], item[1]);  //name hao  age 21
}*/

//Map还有一个forEach方法，与数组的forEach方法类似
// const map = new Map();
// map.set("name", "hai").set("age", 24);
// map.forEach((value, key, map) => console.log("key: %s, Value: %s", key, value));
//key: name, Value: hai
//key: age, Value: 24


/*与其他数据结构的互相转换*/
//Map转为数组
/*const map = new Map()
    .set(true, 7).set(NaN, NaN);
console.log([...map]);  //[ [ true, 7 ], [ NaN, NaN ] ]*/

//数组转为Map:将数组传入Map构造函数
/*const arr = [ [ true, 7 ], [ NaN, NaN ] ];
console.log(new Map(arr));  //Map { true => 7, NaN => NaN }*/

//Map转为对象:前提是所有Map的键都是字符串
/*function strMapToObj(strMap){
    let obj = Object.create(null);
    for(let [k,v] of strMap){
        obj[k] = v;
    }
    return obj;
}
const myMap = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap));    //{ yes: true, no: false }*/

//对象转换为Map
/*function objToMap(obj){
    let strMap = new Map();
    for(let k of Object.keys(obj)){
        strMap.set(k, obj[k]);
    }
    return strMap;
}
console.log(objToMap({ yes: true, no: false }));    //Map { 'yes' => true, 'no' => false }*/


/*WeakMap:结构与Map类似，也是生成键值对的集合,但与Map有两点区别
* 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
* 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
* */
//WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

