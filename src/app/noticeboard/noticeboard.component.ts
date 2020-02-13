import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import{HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})
export class NoticeboardComponent implements OnInit {
title:string='';
description:string='';
date:string='';
noticedata={
  title:'',
  description:'',
  
}

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }

  ngOnInit() {

    this._httpclient.get('https://zyclyx-app.herokuapp.com/NoticeBoard/ViewNotice')
    .subscribe(
      (res)=>{
        console.log(res +"res is")
        console.log(res["title"]);
        console.log(res["description"]);

        this.title=res["title"];
        this.description=res["description"];
        this.date=res["date"];

      }
    )
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
