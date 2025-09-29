for(var i:number=0;i<5;i++){
    console.log(i);
    setTimeout(function(){
        console.log(i);
    },10)
}

for(let j:number=0;j<5;j++){
    console.log(j);
    setTimeout(function(){
        console.log(j);
    },10)
}