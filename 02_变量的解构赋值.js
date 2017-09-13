//ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这杯称为解构

/*数组的解构赋值*/
/*let [a,b,c] = [1,2,3];
console.log(a + "," + b + "," + c);*/

//默认值
/*let [foo = true] = [];
console.log(foo);
let [x, y = "b"] = ["a", undefined];    //如果一个数组的成员不严格等于undefined，默认值是不会生效的。
console.log("x = " + x + ", " + "y = " + y);*/

/*function f(){
    return "aaa";
}
let [x = f()] = [1];    //如果默认值是一个表达式，那么这个表达式时惰性求值的
console.log(x);*/


/*对象的解构赋值*/
/*let { name, age } = { name: "hai", age: 24 };
console.log(name);
console.log(age);*/

/*let { name: n } = { name: "hai" };
console.log(n);*/     //对象的解构赋值的内部机制，是先找到同名属性，然后在赋值给对应的变量。真正被赋值的是后者，而不是前者

//默认值
/*var { x: y = 3} = { x: 5 };
console.log(y); */    //5

//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
/*let { cos, PI } = Math;
console.log( cos(PI) );*/

/*let arr = [1, 2, 3];    //数组的本质也是特殊的对象
let {0 : first, [arr.length - 1] : last} = arr;     //方括号这种写法属于“属性名表达式”
console.log(first);     //1
console.log(last);      //3*/


/*字符串的解构赋值*/
//字符串也可以解构赋值，这是因为字符串被转换成了一个类似数组的对象
/*const [a, b, c, d] = "chen";
console.log(a+b+c);     //che
let {length: len} = "hai";
console.log(len);       //3*/


/*数值和布尔值的解构赋值*/
//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象
/*let {toString: s} = 123;
console.log(s);     //[Function: toString]
let {toString: t} = true;
console.log(t);     //[Function: toString]
let {prop: x} = undefined;      //TypeError: Cannot match against 'undefined' or 'null'.
*/

/*函数参数的解构赋值*/
/*
var arr = [[1, 2], [3, 4]].map(([a, b]) => a + b);
console.log(arr);   //[ 3, 7 ]*/


/*圆括号问题*/
//不能使用圆括号的三种情况：1.变量声明语句 2.函数参数  3.赋值语句的模式
// let [(a)] = [1];    //SyntaxError: Unexpected token (
// function f([(z)]) {return z;}    //SyntaxError: Unexpected token (
// ({ p: a }) = { p: 42 };    //SyntaxError: Unexpected token (

//可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
/*({ p: (d)} = {p:1});
console.log(d);*/


/*用途*/
//交换变量的值
/*let x = 1, y = 2;
[x, y] = [y, x];
console.log("x=" + x + ", y=" + y);*/

//从函数返回多个值
/*function example(){
    return [1,2,3];
}
let [a,b,c] = example();
console.log(""+a+b+c);*/

//解构赋值可以方便地将一组参数与变量名对应起来
/*function f({x, y, z}) {console.log(arguments[0]);}
f({z:3, y:2, x:1});*/

//解构赋值对提取JSON对象中的额数据，尤其有用
/*let jsonData = {id: 42, status:"OK", data:[918, 129]};
let {id, status, data: number} = jsonData;
console.log(id, status, number);    //42 'OK' [ 918, 129 ]*/

//指定函数参数的默认值，这就避免了在函数体内再写var foo = config.foo || "default foo";这样的语句

//遍历Map结构

