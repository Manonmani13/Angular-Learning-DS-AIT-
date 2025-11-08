function func1(){
    var x:number=10;
    function func2(){
        var y:number=20;
        alert(x); // x is accessible here
        alert(y); // y is accessible here
    }
    func2();
    alert(x);
}
func1();