import { FormGroup,FormControl,Validators } from "@angular/forms";
export default class MyValidators{
    frm1=new FormGroup({
        cnt1:new FormControl("",[Validators.required,Validators.minLength(5)]),
        cnt2:new FormControl("",[Validators.minLength(5),Validators.pattern("[A-Z 0-4*]")])
        })
} 

