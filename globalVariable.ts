var sno:number=101;
function fun1(){
    alert(sno);
}

function fun2_alt(){
    alert("fun2");
    alert(sno); // sno is accessible here
}
fun1();
fun2_alt();