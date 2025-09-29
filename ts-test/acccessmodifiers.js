class accmod {
    constructor() {
        this.pub_var = "public variable";
        this.pri_var = "private variable";
        this.pro_var = "protected variable";
        this.funParent = () => {
            alert(this.pub_var);
            alert(this.pri_var);
            alert(this.pro_var);
        };
    }
}
var objpar = new accmod();
objpar.funParent();
alert(objpar.pub_var);
// alert(objpar.pri_var);//error
// alert(objpar.pro_var);//error
