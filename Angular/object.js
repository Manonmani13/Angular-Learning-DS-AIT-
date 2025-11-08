"use strict";
var user = {
    uname: "scott",
    wife: "sw",
    child: { son: ["aa", "bb"], daughter: "cc" }
};
for (var key in user) {
    console.log(key + " : " + user[key]);
    alert(key);
    for (var k in user[key]) {
        console.log(k + " : " + user[key][k]);
        alert(k);
    }
}
