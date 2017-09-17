/*RegExp构造函数*/
/*var flags = new RegExp(/abc/gi, "i").flags;
console.log(flags);     //i*/


/*u修饰符*/
//\uD83D\uDC2A是一个四个字节的UTF-16编码，代表一个字符
/*console.log(/^\uD83D/u.test('\uD83D\uDC2A'));   //false
console.log(/^\uD83D/.test('\uD83D\uDC2A'));    //true*/

//返回正确的字符串长度的函数
/*function codePointLength(text){
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}
var s = '𠮷𠮷';
console.log(s.length);          //4
console.log(codePointLength(s));//2*/


/*y修饰符:粘连修饰符
* 与g修饰符类似，也是全局匹配，不同的是，g修饰符只要在剩下的位置中有匹配即可，
* 而y修饰符确保匹配必须从剩余的第一个位置开始
* */
/*var s = "hhh_hh_h";
var r1 = /h+/g;
var r2 = /h+/y;
console.log(r1.exec(s));    //[ 'hhh', index: 0, input: 'hhh_hh_h' ]
console.log(r2.exec(s));    //[ 'hhh', index: 0, input: 'hhh_hh_h' ]
console.log(r1.exec(s));    //[ 'hh', index: 4, input: 'hhh_hh_h' ]
console.log(r2.exec(s));    //null*/

//lastIndex属性
/*const regex = /n/y;
regex.lastIndex = 2;
console.log(regex.exec("chen"));    //null
regex.lastIndex = 3;
const match = regex.exec("chen")
console.log(match);    //[ 'n', index: 3, input: 'chen' ]
console.log(match.index);       //3
console.log(regex.lastIndex);   //4*/

//split + y修饰符
/*var arr = "x##".split(/#/y);    //没有找到匹配
console.log(arr);   //[ 'x##' ]

var arr = "##x".split(/#/y);    //找到两个匹配
console.log(arr);   //[ '', '', 'x' ]*/

//match + y修饰符
/*var arr = "a1a2a3".match(/a\d/y);
console.log(arr);   //[ 'a1', index: 0, input: 'a1a2a3' ]
var arr = "a1a2a3".match(/a\d/gy);
console.log(arr);   //[ 'a1', 'a2', 'a3' ]*/

//应用：从字符串提取词元，y修饰符确保了匹配之间不会有漏掉的字符
/*const TOKEN_Y = /\s*(\+|[0-9]+)\s*!/y;
const TOKEN_G = /\s*(\+|[0-9]+)\s*!/g;
function tokenize(TOKEN_REGEX, str) {
    let result = [];
    let match;
    while (match = TOKEN_REGEX.exec(str)) {
        result.push(match[1]);
    }
    return result;
}
console.log(tokenize(TOKEN_Y, '3x + 4'));   //[ '3' ]
console.log(tokenize(TOKEN_G, '3x + 4'));   //[ '3', '+', '4' ]*/


/*sticky属性:表示是否设置了y修饰符*/
/*var r = /chen/y;
console.log(r.sticky);      //true*/


/*flags属性*/
/*var reg = /hai/ig;
console.log(reg.flags);     //gi
console.log(reg.source);    //hai*/
