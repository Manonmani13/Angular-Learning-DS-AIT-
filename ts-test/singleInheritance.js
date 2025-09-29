class cls1 {
    func1() {
        alert("Function of cls1");
    }
}
class cls2 extends cls1 {
    func2() {
        alert("Function of cls2");
    }
}
var obj1 = new cls2();
obj1.func1();
obj1.func2();
