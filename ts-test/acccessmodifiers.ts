class accmod{
    public pub_var:string="public variable";
    private pri_var:string="private variable";
    protected pro_var:string="protected variable";

    funParent=()=>{
        alert(this.pub_var);
        alert(this.pri_var);
        alert(this.pro_var);
    }
}
var objpar:accmod=new accmod();
objpar.funParent();
alert(objpar.pub_var);
// alert(objpar.pri_var);//error
// alert(objpar.pro_var);//error