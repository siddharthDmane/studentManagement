import { Component } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css',"../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class FetchComponent {
  constructor(public _datastore:DatastoreService){}
}
