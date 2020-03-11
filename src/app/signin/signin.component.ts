import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  name:string='';
  password:number;
  array4:any;
  loginUserData = {
    email:"",
    password:'',

  }

  constructor(private _auth: AuthService,
              private _router: Router) { }

  // onKey(event:any){
  //   this.name=event.target.value;
  //   console.log(this.name)

  // }
  // onKey1(event:any){
  //   this.password=event.target.value;
  //   console.log(this.password)

  // }

 
  ngOnInit() {

   
  }
  
  loginUser() {
    console.log(this.loginUserData)
    this._router.navigate(['/homepage'])
   
   
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        this.array4=res
        var jsonObj = JSON.parse(this.array4._body);
        console.log(jsonObj)
        this.array4=jsonObj.msg;
        console.log( this.array4)
        // localStorage.setItem('token', res.token)
        // localStorage.setItem('id',res.email)
     
        // console.log(res.token)
        if( this.array4=="login successfull")
        {
          
          this._router.navigate(['/homepage'])
         
        }
        else{
          Swal.fire('','Login Failed','error')
          this._router.navigate(['/signin'])
        }
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this._router.navigate(['/signin'])
          }
        }
      }
    ) 
  }
  





}
