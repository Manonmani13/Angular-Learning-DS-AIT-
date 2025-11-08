function fun1(){
    var x:number=10;
    alert(x);
}
function fun2(){
    alert("fun2");
    // alert(x); // x is not accessible here
}       
fun1();
fun2();