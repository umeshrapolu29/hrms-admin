import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DilogeComponent } from 'app/diloge/diloge.component';
import { Http } from '@angular/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-uploadpayslips',
  templateUrl: './uploadpayslips.component.html',
  styleUrls: ['./uploadpayslips.component.scss']
})
export class UploadpayslipsComponent implements OnInit {
  //name:string='';
  name1:string='';
  selected1:any;
  selected2:any;
  EmployeeName:any
  file1:any;
  Yes:any;
  success:any;
  selected:any;
  name2:string='';
  name3:string='';
  myArray:any;
  myArray1:any;
  empData={
    file:'',
    month:'',
    year:'',
    name:'',
  
  }
  
 
  public emoployeeData: FormGroup
  public filesToUpload: Array<File> = [];
  dialog: any;
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http1: Http) { }

  ngOnInit() {

    this.http1.get('https://hrmsbackend.herokuapp.com/user/getallemployeenames')
    .subscribe(
      (res)=>
      {
        console.log(res)
        this.myArray=res;
        var jsonObj = JSON.parse(this.myArray._body);
        console.log(jsonObj)
        this.myArray=jsonObj.data;
        console.log( this.myArray)
    

      }
    )
    
 
  }
  
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }
  uploadpayslips()
  {
    let  senddata1 = new FormData();
    //senddata.fullid= this.fullid
    senddata1.append('file', this.filesToUpload[0]);
    console.log(File+" file")
    senddata1.append('month',this.empData.month);
    senddata1.append('year',this.empData.year);
   senddata1.append('email',this.empData.name);
   console.log(this.empData.month)
    //console.log(senddata+"senddata")
    //console.log(this.senddata1)
    this._auth.uploadpayslips(senddata1)
    .subscribe((res)=>{
      console.log(res)
      this.myArray1=res
      var jsonObj = JSON.parse(this.myArray1._body);
      console.log(jsonObj)
      this.myArray1=jsonObj.msg;
      console.log(this.myArray1)

      if(this.myArray1=="get names details"){
        Swal.fire('','Payslip Uploaded  Successful','success')
        this._router.navigate(['/homepage'])
      }
      else{
        Swal.fire('','Payslip Uploaded failed','error')
        this._router.navigate(['/homepage'])
      }
     

    }
    )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DilogeComponent, {
   
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
