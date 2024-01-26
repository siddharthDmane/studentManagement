import { Component } from '@angular/core';
import { DatastoreService } from './datastore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class AppComponent {
  title = 'studentManagement';
  constructor(public _datastore:DatastoreService){}
}
