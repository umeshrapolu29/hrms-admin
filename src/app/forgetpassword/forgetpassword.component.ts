import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http1:Http,) { }
  array:any;
  logindata={
  
  
    email:''
  }

  ngOnInit() {
  }
  forgetpassword(){
    console.log("forgotemail")
    const payload = new FormData();
  
    payload.append('fmail',this.logindata.email);
    localStorage.setItem('ffmail',this.logindata.email)
    console.log(this.logindata.email+"email is")
    this.auth.forgotpassword(payload).subscribe(res=>{
      console.log(res)
      this.array=res;
      this._router.navigate(['/resetpassword'])
      // if(this.array.data.n==1){
      // Swal.fire('',this.array.msg,'success')
      // }
      // else{
      //   Swal.fire('',' Invalid Token','error')
      // }

    })

  }


}
