import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-app';
  txtName: string = '';
  txtCity: string = '';
  btnTxt = 'Insert';
  red_id = '';
  table_data: any;

  constructor(private ht: HttpClient) {}

  ngOnInit(): void {
    this.funGetData();
  }

  funGetData() {
    this.ht.get("http://localhost:4000/getData").subscribe((dt: any) => {
      this.table_data = dt;
    });
  }

  funInsert() {
    if (this.btnTxt === 'Insert') {
      const obj = { uname: this.txtName, city: this.txtCity };
      this.ht.post("http://localhost:4000/insertData", obj, { responseType: 'text' })
        .subscribe((dt: string) => {
          alert(dt);
          this.funGetData();
          this.txtName = '';
          this.txtCity = '';
        }, err => {
          console.error("Insert error:", err);
        });
    } else {
      const obj = { oid: this.red_id, un: this.txtName, ct: this.txtCity };
      this.ht.post("http://localhost:4000/update", obj)
        .subscribe((dt: any) => {
          alert(dt.result);
          this.btnTxt = 'Insert';
          this.txtName = '';
          this.txtCity = '';
          this.funGetData();
        }, err => {
          console.error("Update error:", err);
        });
    }
  }

  funTrash(rid: string) {
    const ob = { _id: rid };
    this.ht.post("http://localhost:4000/deleteData", ob)
      .subscribe((dt: any) => {
        alert(dt.result);
        this.funGetData();
      }, err => {
        console.error("Delete error:", err);
        alert("Delete failed");
      });
  }

  funUpdate(rdata: any) {
    this.txtName = rdata.uname;
    this.txtCity = rdata.city;
    this.red_id = rdata._id;
    this.btnTxt = 'Save';
  }

}
