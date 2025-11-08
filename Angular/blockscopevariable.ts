function blockScopeVariable(){
    {
 let vx:number=10;
    var y:number=20;
    }
    alert(y); // y is accessible here
    // alert(vx); // x is not accessible here
}
blockScopeVariable();
   