import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databinding2';
  sno:number=101;
  i:number=0;
  gender:string='';
  chk:any;
  city:string ='Chennai';
  imagePath :string='banana.jpeg';
  arr:any[]=["banana.jpeg","mango.jpeg","blue.jpeg","download.jpeg"];

  funPrev(){
    if(this.i>0){
 this.i--;
    this.imagePath=(this.arr[this.i]);
    }
   else{
    alert("No Previous Image");
   }
    //
    alert("Prev Exec....")
  }

  funNext(){
    if(this.i<this.arr.length){

  this.i++;
    this.imagePath=(this.arr[this.i]);
}  
    // alert("Next Exec....")
  }
  
  funRegister(){
    alert(this.chk)
  }

}
