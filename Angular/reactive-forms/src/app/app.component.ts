import { Component } from '@angular/core';
// import { FormGroup,FormControl,Validators } from '@angular/forms';
import valRef from "../validations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms';
  // frm1=new FormGroup({
  //   cnt1:new FormControl("",[Validators.required,Validators.minLength(5)]),
  //   cn2:new FormControl("",[Validators.minLength(5),Validators.pattern("A-Z 0-4*")])
  // })

  obj:valRef=new valRef();
  funSubmit(){
    if(this.obj.frm1.valid){

    alert(this.obj.frm1.controls.cnt2.value)

    }
  }
}
