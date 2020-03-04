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
          Swal.fire('','Login Successfully','success')
          this._router.navigate(['/homepage'])
         
        }
        else{
          Swal.fire('','Login Failed','success')
          this._router.navigate(['/signin'])
        }
      }
      // err => {
      //   if( err instanceof HttpErrorResponse ) {
      //     if (err.status === 401) {
      //       this._router.navigate(['/signin'])
      //     }
      //   }
      // }
    ) 
  }
  // userlogin()
  //   {
  //     console.log(this.name)
  //     this.httpClient.get(`http://localhost:3000/admin/data`)
  //     .subscribe(
  //       (data:any[])=>
  //       {
  //       console.log(data);

          
  //       }
  //    )
  //   }





//     postProfile(){
//        console.log(this.name)
//       console.log(this.password)
//       this.httpClient.post(`http://localhost:3000/admin/login`,
//       {
//         email:this.name,
//          password: this.password
//       })
//       .subscribe(
//         (data:any) => {
//           console.log(data);
//           localStorage.setItem('token',data.token)
//           if(!!localStorage.getItem('token') &&  localStorage.getItem('token')!="undefined")
//           {
//             console.log("in if"+!!localStorage.getItem('token'))
//           this._router.navigate(['/addnotice'])
//           }
//           else if(localStorage.getItem('token')=="undefined"){
//             console.log("in else"+!!localStorage.getItem('token'))
//             this._router.navigate(['/signin'])
//           }
//         }
//       )
//     }

//       // verif method
// loggedin()
// {
//   return !!localStorage.getItem('token')
// }

}
