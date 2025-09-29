interface inter1
{
    fun1();
    fun2();
}

class interImple implements inter1{
    fun1() {
        alert("fun1");
    }
    fun2() {
        alert("fun2");
    }

}
var objInter:interImple=new interImple();
objInter.fun1();
objInter.fun2();