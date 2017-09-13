// 'use strict';
/*基本用法*/
/*
{
    let a = 1;          //let声明的变量只在他所在的代码块有效
    var b = 2;
}
console.log(a);     //ReferenceError: a is not defined
console.log(b);     //2
*/

/*
var a = [];
for(var i=0; i<10; i++){    //把var改成let,则最后输出6
    a[i] = function(){
        console.log(i);     //指向的是同一个变量i,因为i是var声明的，在全局范围有效
    };
}
a[6]();    //10
*/

/*for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);         //输出三次abc，说明函数内部变量i与循环变量i不在同一个作用域
}*/


/*不存在变量提升*/
/*
console.log(chen);      //undefined
var chen = 2;

console.log(hai);       //ReferenceError: hai is not defined
let hai = 5;*/


/*暂时性死区:
* 本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
* */
/*if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}*/


/*不允许重复声明*/
/*function func(data){
    let data = data;    /报错
}*/


/*块级作用域*/
//块级作用域的出现，实际上使得立即执行函数表达式不再必要
/*function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();*/


/*块级作用域与函数声明*/
/*function f() { console.log("我在外面！"); }
(function(){
    if(false){
        function f() { console.log("我在里面！！"); }
    }
    f();    //f is not a function
}());*/

//尽量避免在块级作用域内声明函数。如果确实需要，也应写成函数表达式，而非函数声明语句
/*function f() { console.log("我在外面！"); }
(function(){
    if(false){
        let f = function() { console.log("我在里面！！"); }
    }
    f();    //f is not a function
}());*/


/*const命令*/
//const声明一个只读的常量。一旦声明，常量的值就不能改变
/*const PI = 3.1415;
console.log(PI);
PI = 3;     //TypeError: Assignment to constant variable.*/

//const命令和let命令相同，只在声明所在的块级作用域内有效，声明的变量也是不提升

//ES6一共有6种声明变量的方法：var function let const import class


/*顶层对象的属性*/
/*
var a = 1;
console.log(window.a);

let b = 2;
console.log(window.b);*/

