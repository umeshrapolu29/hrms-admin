import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.scss']
})
export class AddnoticeComponent implements OnInit {
  noticedata={}

 
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {

    
  }
  addnotice(){

    console.log(this.noticedata)
    this._auth.addnotice(this.noticedata)
    
    .subscribe(
      res => {
         console.log(res)
        if(localStorage.getItem('token')=="undefined")
        {
          this._router.navigate(['/signin'])
        }
        else{
        this._router.navigate(['/holiday'])
        }
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this._router.navigate(['/viewnotice'])
          }
        }
      }
    )
  }

}
