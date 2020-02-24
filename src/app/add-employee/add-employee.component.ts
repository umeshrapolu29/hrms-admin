import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormBuilder } from '@angular/forms';
const URL = 'http://127.0.0.1:3000/users/uploadFile';
import Swal from 'sweetalert2';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],

})
export class AddEmployeeComponent implements OnInit {
  file:any;
  empData = { 
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    DOJ:'',
    phonenumber:'',
    gender:'',
    DOB:'', 
    cnf_pswd:'',
    //confirmpassword: '',
    token: localStorage.getItem('token'),
    id:localStorage.getItem('id')
  
  }
 
  public emoployeeData: FormGroup
  public filesToUpload: Array<File> = [];

  constructor(private _auth: AuthService,
    private _router: Router,
    private _fb: FormBuilder) { }
  
  selectedFile: ImageSnippet;

  ngOnInit() {
    this.emoployeeData = this._fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      email: [''],
      password: [''],
      phonenumber: [''],
      profileImage: [''],
      DOJ:[''],
      gender:[''],
    })
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }
  
  addemployee() {
   
    
    console.log("inside ts")
    const payload = new FormData();
    const file: File = this.filesToUpload[0];
    console.log(file+"file at ts")
   
    payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
    console.log(File+" file")
    payload.append('firstname',this.empData.first_name);
    payload.append('lastname',this.empData.last_name);
    payload.append('email',this.empData.email);
    payload.append('password', this.empData.password);
    payload.append('DOJ',this.empData.DOJ);
    payload.append('phonenumber',this.empData.phonenumber),
     payload.append('gender',this.empData.gender),
    payload.append('DOB',this.empData.DOB),
    // payload.append('token',this.empData.token)
   //payload.append('id',this.empData.id)
 
   console.log(payload+"payload");
    this._auth.uploadSheet(payload)
      .subscribe(
        res => {
          console.log("hello registarrtion");
          console.log(res)
          console.log(this.empData )
          console.log(this.empData.id )
          if (localStorage.getItem('token') == "undefined") {
            this._router.navigate(['/signin'])
          }
          else {
            this._router.navigate(['/holiday'])
          }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/viewnotice'])
            }
          }
        }
      )
  }



}
