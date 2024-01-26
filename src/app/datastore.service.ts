import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  students_data=[
    {
      student_name:"Ramesh",
      user_name:"Ramesh135",
      role:"User",
      email:"Ramesh@gmail.com",
      password:"Ramesh135"
    },
    {
      student_name:"Ramesh",
      user_name:"Ramesh135",
      role:"User",
      email:"Ramesh@gmail.com",
      password:"Ramesh135"
    },
    {
      student_name:"Ramesh",
      user_name:"Ramesh135",
      role:"User",
      email:"Ramesh@gmail.com",
      password:"Ramesh135"
    },
    {
      student_name:"Ramesh",
      user_name:"Ramesh135",
      role:"User",
      email:"Ramesh@gmail.com",
      password:"Ramesh135"
    }            
  ];

  constructor() { }
}
