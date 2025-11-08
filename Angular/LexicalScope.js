"use strict";
function func1() {
    var x = 10;
    function func2() {
        var y = 20;
        alert(x); // x is accessible here
        alert(y); // y is accessible here
    }
    func2();
    alert(x);
}
func1();
