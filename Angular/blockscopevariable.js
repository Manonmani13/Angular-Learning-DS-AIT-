"use strict";
function blockScopeVariable() {
    {
        let vx = 10;
        var y = 20;
    }
    alert(y); // y is accessible here
    // alert(vx); // x is not accessible here
}
blockScopeVariable();
