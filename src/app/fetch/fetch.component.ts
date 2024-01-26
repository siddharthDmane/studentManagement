import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { HttpreqService } from '../httpreq.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css',"../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class FetchComponent {
  constructor(public _datastore:DatastoreService,private _http:HttpreqService){
    this.fetchAll();
  }

  fetchAll(){
    this._http.fetchAll().subscribe((res)=>{
        console.log(res);
        let res1=JSON.stringify(res);
        this._datastore.students_data=JSON.parse(res1); 
    });
  }

  
}
