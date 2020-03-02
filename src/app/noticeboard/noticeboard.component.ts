import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import{HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})
export class NoticeboardComponent implements OnInit {
title:string='';
description:string='';
date:string='';
  array:any;
  array1:any;
  array4:any;
noticedata={
  title:'',
  description:'',
  date:'',

  
}
public emoployeeData: FormGroup
public filesToUpload: Array<File> = [];

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http1:Http,) { }
    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
 
    }
   

  ngOnInit() {

    this.http1.get('http://localhost:3002/user/viewnotice')
    .subscribe(
      (res)=>{
        
        console.log(res)
        this.array=res;
        var jsonObj = JSON.parse(this.array._body);
        console.log(jsonObj.data)
        this.array=jsonObj.data;
      

      }
    )
  }
  
  addnotice(){
    const payload = new FormData();
    const file: File = this.filesToUpload[0];
    payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
    console.log(File+" file")

   
    payload.append('title',this.noticedata.title);
    payload.append('description',this.noticedata.description);
    payload.append('date',this.noticedata.date);
    console.log(this.noticedata.date+"DATE IS")
  

    console.log(this.noticedata)
    this._auth.addnotice(payload)
    
    .subscribe(
      res => {
         console.log(res)
         this.array4=res
         var jsonObj = JSON.parse(this.array4._body);
         console.log(jsonObj)
         this.array4=jsonObj.msg;
         console.log( this.array4)
         if(this.array4=="addnotice data"){
           Swal.fire('','Notice added Successful','success')
             this._router.navigate(['/homepage'])
         }
         else{
           Swal.fire('','Notice added Failed','error')
           this._router.navigate(['/homepage'])
         }
       
      },
     
    )
  }

}
