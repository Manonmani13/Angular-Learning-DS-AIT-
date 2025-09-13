"use strict";
function funs() {
    var sno = 101;
    let x = 1;
    alert("Hello, world!" + sno + x);
}
funs();
function fun1() {
    {
        var sno = 102;
        var x = 3;
    }
    alert("Hello, world!" + sno + x);
}
fun1();
