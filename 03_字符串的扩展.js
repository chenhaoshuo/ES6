/*字符的Unicode表示法*/
/*console.log("\u0061");      //a
//JS一共有6中方法可以表示一个字符
console.log("\z" === "z");
console.log("\172" === "z");
console.log("\x7A" === "z");
console.log("\u007A" === "z");
console.log("\u{7A}" === "z");*/


/*codePointAt()*/
//在JS内部，字符以UTF-16的格式存储，每个字符固定为2个字节。对于需要4个字节而存储的字符，JS会认为他们是两个字符
/*var s = "𠮷";
console.log(s.length);          //2
console.log(s.charAt(0));       //�
console.log(s.charAt(2))        //''
console.log(s.charCodeAt(0));   //55362
console.log(s.charCodeAt(1));   //57271

console.log(s.codePointAt(0));  //134071,返回正确的32位UTF-16码点*/


/*String.fromCodePoint()*/
/*console.log(String.fromCharCode(0x20BB7));      //ஷ
console.log(String.fromCodePoint(0x20BB7));     //𠮷
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79)); //x🚀y*/


/*字符串的遍历器接口*/
//ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
/*for(let codePoint of "hai"){
    console.log(codePoint);
}*/


/*normalize()*/
/*console.log(String.fromCharCode(0x01D1));    //Ǒ
console.log(String.fromCharCode(0x004F, 0x030C));   //Ǒ

var bool = '\u01D1'.normalize() === '\u004F\u030C'.normalize();
console.log(bool);*/


/*includes()：返回布尔值，表示是否找到参数字符串,
* startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部,
* endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部
* */
/*var s = "chen hai";
console.log(s.startsWith("chen"));
console.log(s.endsWith("hai"));
console.log(s.includes("h"));

console.log(s.endsWith("chen", 3));     //支持第二个参数，表示开始搜索的位置
console.log(s.endsWith("chen", 4));*/


/*repeat()*/
// console.log("hai ".repeat(3));      //hai hai hai


/*padStart(), padEnd()*/
// "12".padStart(10, "YYYY-MM-DD");    //TypeError: "12".padStart is not a function


/*模板字符串
* 是增强版的字符串，用反引号标识。
* 他可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
* */
/*console.log(`In JavaScript '\n' is a line-feed.`);
console.log(`string text line 1
string text line 2`);
var name = "hai", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);*/

//大括号内部可以放入任意的JS表达式，可以进行运算，以及引用对象属性。
// var obj = {x:1, y:2};
// console.log(`${obj.x + obj.y}`);

//模板字符串之中还能调用函数
// function f(){
//     return "你还好吗";
// }
// console.log(`hai, ${f()}`);

//如果模板字符串中的变量没有声明，将报错
// console.log(`${place}`);    //ReferenceError: place is not defined

//模板字符串甚至还能嵌套
/*const tmpl = addrs => `
    <table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join("")}
    </table>
`;
const data = [
    {first: "CHEN", last: "hai"},
    {first: "CHEN", last: "jun"}
];
console.log(tmpl(data));*/


/*实例：模板编译*/
/*function compile(template){
    var evalExpr = /<%=(.+?)%>/g;   //.表示除了换行符和其他Unicode行终止符之外的任意字符
    var expr = /<%([\s\S]+?)%>/g;   //\s表示任何Unicode空白符

    template = template
        .replace(evalExpr, '`); \n echo($1); \n echo(`')
        .replace(expr, '`); \n $1 \n echo(`');

    template = 'echo(`' + template + '`);';

    var script = `(function parse(data){
        var output = "";
        function echo(html){
            output += html;
        }
        ${ template }
        return output;
    })`;
    return script;
}

var template = `
    <ul>
        <% for(var i=0; i<data.supplies.length; i++){ %>
            <li><%= data.supplies[i] %></li>
        <% } %>
    </ul>
`;
var parse = eval(compile(template));
console.log(parse({ supplies:["broom", "mop", "cleaner"] }));*/


/*标签模板
* 标签模板其实不是模板，而是函数调用的一种特殊方式。“标签”指的是函数，
* 紧随其后的模板字符串就是他的参数。
* */
/*var name = "Hai", age = 24;
var msg = passthru`你好，我是${ name }，今年${ age }岁。`;
function passthru(literals){
    var result = "";
    var i = 0;
    while(i < literals.length){
        result += literals[i++];
        if(i<arguments.length){
            result += arguments[i];
        }
    }
    return result;
}
console.log(msg);*/

//"标签模板"的一个重要的应用，就是过滤HTML字符串，防止输入恶意内容
/*function SaftHTML(templateData){
    var s = templateData[0];
    for(var i=1; i<arguments.length; i++){
        var arg = String(arguments[i]);
        s += arg.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        s += templateData[i];
    }
    return s;
}
var sender = "<script>alert('abc')</script>";
var message = SaftHTML`<p>${ sender } has send you a message.</p>`;
console.log(message);*/


/*String.raw()*/
// console.log(String.raw({ raw: 'test' }, 0, 1, 2));      //t0e1s2t

