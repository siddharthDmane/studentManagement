import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpreqService {

  constructor(private _http:HttpClient) { }

  fetchStudentsData(){
    return this._http.get("http://localhost:8000/getUsers");
  }

  fetchAdminsData(){
    return this._http.get("http://localhost:8000/getAdmins");
  }

  fetchAll(){
    return this._http.get("http://localhost:8000/getAll");
  }
}
