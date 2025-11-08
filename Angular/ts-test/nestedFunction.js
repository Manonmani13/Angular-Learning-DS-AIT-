class cls {
    constructor() {
        this.sno = 100;
    }
    fun1() {
        //we canot create nested function inside a class function
        //if you want to create nested function use arrow function
        function fun2() {
            alert("nested function");
        }
        var fun12 = () => {
            alert("arrow function");
        };
        fun2();
    }
}
var clsObj = new cls();
clsObj.fun1();
