import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css',"../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class EditComponent {

  constructor(private _datastore:DatastoreService){}

  stud_name:string="Edit name";
  user_name:string="you can't edit this field";
  user_role:string="you can't edit this field";
  user_email:string="Enter email to fetch your data";
  user_pass:string="Enter password to fetch your data";

  ngOnInit(){
    alert('To update data first fetch the data by giving your email and password !')
  }

  onFetch(sname:any,suname:any,sdob:any,semail:any,spass:any){
    let len=Object.keys(this._datastore.students_data).length;
    let index=-1;
    for(let i=0;i<len;i++){
      if(this._datastore.students_data[i].email==semail.value
         && this._datastore.students_data[i].password==spass.value){
          index=i;
          console.log(index);
          break;
         }
    }
    if(index!=1){
      this.stud_name=this._datastore.students_data[index].student_name;
      this.user_name=this._datastore.students_data[index].user_name;
      this.user_role=this._datastore.students_data[index].role;
      this.user_email=this._datastore.students_data[index].email;
      this.user_pass=this._datastore.students_data[index].password;
      alert(this.stud_name+" "+this.user_name);
      console.log(this.stud_name+" "+this.user_name);
    }
  }


  onSubmit(sname:any,suname:any,sdob:any,semail:any,spass:any){
    if(confirm(`Confirm Your information  => name : ${sname.value} user name : ${suname.value}  dob : ${sdob.value}  email : ${semail.value}  password : ${spass.value}`)){
      alert('Submitted Successfully !');
    }
    else{
      alert('Submission Aborted !');
    }
  }
}
