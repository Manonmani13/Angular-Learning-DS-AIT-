"use strict";
var f = () => {
    console.log("arrow function");
    alert("arrow function");
};
f();
var arr = [10, 15, 20, 25];
var allow = arr.map(x => x * 2);
alert(allow);
