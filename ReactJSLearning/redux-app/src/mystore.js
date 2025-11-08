export default (sno=10,action)=>{
    console.log(action);
    if(!action.type.includes("@@redux/"))
        sno=action.type;
    return sno;
}