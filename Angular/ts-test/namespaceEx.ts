namespace ns1{
    export class cls1{
        fun1(){
            alert("fun1 executed");
        }

    }
    class cls2{
        fun2(){
            alert("fun2 executed");
        }
    }
}
var obj:ns1.cls1=new ns1.cls1();
obj.fun1();