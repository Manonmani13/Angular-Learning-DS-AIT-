abstract class AbstrEx{
    fun1(){
        alert("fun1");
    }
    abstract fun2():void;
}
class NonAbstr extends AbstrEx{
    fun2(): void {
        alert("fun2");
    }
}
var objAbstr:NonAbstr=new NonAbstr();
objAbstr.fun1();
objAbstr.fun2();