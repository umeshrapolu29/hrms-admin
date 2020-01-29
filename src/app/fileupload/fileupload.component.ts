import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})

export class FileuploadComponent implements OnInit {
  AddemployeeData = {'token':localStorage.getItem('token')}
  public filesToUpload: Array<File> = [];


  constructor(private _auth: AuthService,
    private _router: Router) { }
  ngOnInit() {
  }
  


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }



  uploadFile() {
    const payload = new FormData();
    const file: File = this.filesToUpload[0];
    payload.append('content', file, file.name);
    this._auth.uploadSheet(payload).subscribe(res => {
      });
  }



}
