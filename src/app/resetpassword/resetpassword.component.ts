import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  constructor(private auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http1:Http,) { }
  array:any;
  array1:any;
logindata={

  token:'',
  updatepassword:''
}

  ngOnInit() {
  }
  resetpassword(){
    const payload = new FormData();
    payload.append('fmail',localStorage.getItem('ffmail'));
    payload.append('token1',this.logindata.token);
    payload.append('updatepassword',this.logindata.updatepassword);
    console.log(payload+"payload")
    this.auth.resetpassword(payload).subscribe(res=>{
      console.log(res)
      this.array=res;
      console.log(this.array)
      this.array1=this.array._body
      var jsonObj = JSON.parse(this.array._body);
      console.log(jsonObj.data.n)

      if(jsonObj.data.n==1){
      Swal.fire('',this.array.msg,'success')
      this._router.navigate(['/signin'])

      }
      else{
        Swal.fire('',' Invalid Token','error')
      }

    })
  }

}
