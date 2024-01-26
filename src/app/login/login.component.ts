import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { Router } from '@angular/router';
import { HttpreqService } from '../httpreq.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',"../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class LoginComponent {

  constructor(private _datastore:DatastoreService,private router:Router,private _http:HttpreqService){
    console.log("fetched All data ....."+Object.keys(this._datastore.students_data).length);;
    this.fetchAll();
  }

  ngOninit(){
    // console.log("fetched All data ....."+Object.keys(this._datastore.students_data).length);;
    // this.fetchAll();
  }

  fetchAll(){
    this._http.fetchAll().subscribe((res)=>{
        console.log(res);
        let res1=JSON.stringify(res);
        this._datastore.students_data=JSON.parse(res1); 
    });
  }

  onSubmit(suname:any,srole:any,spass:any){
    let len=Object.keys(this._datastore.students_data).length;
    let index:number=-1;

    for(let i=0;i<len;i++){
      console.log(this._datastore.students_data[i].user_name+" "+this._datastore.students_data[i].password+" "+this._datastore.students_data[i].role);
      console.log(suname.value+" "+spass.value+" "+srole.value);
      if(this._datastore.students_data[i].user_name==suname.value
         && this._datastore.students_data[i].password==spass.value
         && this._datastore.students_data[i].role==srole.value){
          index=i;
          console.log(index);
          break;
         }
    }
    if(index!=-1){
      // this.stud_name=this._datastore.students_data[index].student_name;
      // this.user_name=this._datastore.students_data[index].user_name;
      // this.user_role=this._datastore.students_data[index].role;
      // this.user_email=this._datastore.students_data[index].email;
      // this.user_pass=this._datastore.students_data[index].password;
      console.log("index : "+index);
      alert("logged in suscessfully by "+suname.value+" "+srole.value);
      if(srole.value=='User'){
        this.router.navigate(['/fetchUsers']);
      }
      else{
        this._datastore.fetchall=false;
        this.router.navigate(['/fetchAdmins']);
      }      
    }
    else{
      alert("login error type your coreect information !");
    }
  }
}
