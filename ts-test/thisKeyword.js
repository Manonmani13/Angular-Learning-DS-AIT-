class cl1s1 {
    constructor() {
        this.sno = 100;
    }
    fun1() {
        var sno = 200;
        // alert(sno);//200
        // alert(this.sno);//100   
        alert("first class function");
    }
}
var objc = new cl1s1();
objc.fun1();
class clas2 extends cl1s1 {
    fun1() {
        alert("second  class fun1");
    }
    fun2() {
        alert("second class fun2");
        // alert(this.sno);
        this.fun1();
        super.fun1();
    }
}
var oj2 = new clas2();
oj2.fun2();
