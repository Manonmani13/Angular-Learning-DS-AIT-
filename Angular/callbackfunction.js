"use strict";
function fun1s(x) {
    alert("fun1");
    alert(x);
}
function fun2_alt() {
    alert("fun2");
    fun1s("Called from fun2_alt");
}
function fun3() {
    alert("fun3");
}
fun1s(fun2_alt);
fun1s(fun3);
