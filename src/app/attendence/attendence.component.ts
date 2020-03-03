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
  myArray:any;

  constructor( private http:Http,private _auth: AuthService, ) { }
  leavedata={
    status:'',
   
    email:localStorage.getItem('email1')
  }


  ngOnInit() {
    this.http.get(' https://hrmsbackend.herokuapp.com/user/getallemployeenames')
    .subscribe(
      (res)=>
      {
        console.log('===>', res)
        this.myArray=res;
        this.myArray=res
        var jsonObj = JSON.parse(this.myArray._body);
        console.log(jsonObj)
        this.myArray=jsonObj.data;
        console.log(this.myArray)
        // this.name = this.myArray[0].name;

        // console.log('res==>', this.name)
        // this.name=res[1].name
        // // this.name2=res[2].name
        // // this.name2=res[3].name
        // console.log( this.name)

      }
    )
  }
  addattendence(){
    const attendence= new FormData()
    // console.log(this.leavedata.holidayType+"type")
    attendence.append('holidaytype',this.leavedata.status)
    console.log(this.leavedata.status)
    this._auth.attendence(attendence).subscribe((res)=>{
      console.log(res)
    })

  }
  
}

