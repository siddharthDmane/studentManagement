import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',"../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class RegisterComponent {

  constructor(private _datastore:DatastoreService){}



  onSubmit(sname:any,suname:any,srole:any,semail:any,spass:any){
    if(confirm(`Confirm Your information  => name : ${sname.value} user name : ${suname.value} dob : ${srole.value}  email : ${semail.value}  password : ${spass.value}`))
    {
      alert('Submitted Successfully !');
      let obj={
        student_name:sname.value,
        user_name:suname.value,
        role:srole.value,
        email:semail.value,
        password:spass.value
      };
      console.log(this._datastore.students_data);
      this._datastore.students_data.push(obj);
      console.log(this._datastore.students_data);
    }
    else{
      alert('Submission Aborted !');
    }
  }

}
