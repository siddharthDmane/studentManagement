import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { HttpreqService } from '../httpreq.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',"../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class AdminComponent {
  constructor(public _datastore:DatastoreService,private _http:HttpreqService){
    this.fetchNone();
  }

  fetchNone(){
    this._datastore.students_data=[]; 
  }
  fetchAdminsData(){
    this._http.fetchAdminsData().subscribe((res)=>{
        console.log(res);
        let res1=JSON.stringify(res);
        this._datastore.students_data=JSON.parse(res1); 
    });
  }
}
