import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {

  constructor( private http:Http ) { }

  ngOnInit() {
  }
  addholiday(){
    console.log("inside")
    
    this.http.get('http://localhost:3001/user/getpostdata')
    .subscribe(
      (res)=>
      {
        console.log('===>', res)
      
  
      }
    )
  }

}

