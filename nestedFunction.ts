function fun1()
{
    alert("fun1");
    function fun2s()
    {
        alert("fun2");
    }

}
fun1();
fun1.fun2s(); // Error: Property 'fun2' does not exist on type '() => void'.