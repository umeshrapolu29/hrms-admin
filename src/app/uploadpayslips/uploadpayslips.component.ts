import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DilogeComponent } from 'app/diloge/diloge.component';

@Component({
  selector: 'app-uploadpayslips',
  templateUrl: './uploadpayslips.component.html',
  styleUrls: ['./uploadpayslips.component.scss']
})
export class UploadpayslipsComponent implements OnInit {
  //name:string='';
  name1:string='';
  name2:string='';
  name3:string='';
  myArray:any;
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
    private _router: Router, private _httpclient:HttpClient) { }

  ngOnInit() {

    this._httpclient.get('http://localhost:3000/Payslips/getEmployeeNames')
    .subscribe(
      (res)=>
      {
        console.log(res)
        this.myArray=res;
        //this.name = this.myArray[0].name;

        // console.log('res==>', this.name)
        // this.name1=res[1].name
        // this.name2=res[2].name
        // this.name2=res[3].name
        // console.log( this.name)

      }
    )
    
    // this._httpclient.get('http://localhost:3000/Payslips/getEmployeeNames')
    // .subscribe(
    //   (res)=>{
    // }
    // )
   
      //   this.Ename=res["name"]
      //   this.reason=res["reason"]
      //   this.fullid=res["fullid"]
      //   this.fromdays=res["fromdays"]
      //   this.todays=res["todays"]
      //   this.reqtype=res["reqtype"]
      // //  console.log(this.reqtype)
      //   console.log("datat"+this.fullid);
      

    //  $(document).ready(function(){
    //    $(".bt").on('click', function(){
    //      $(".cover").show();
    //      $(".pop").show();
        
    //    });
    //    $("#close").on('click', function(){
    //      $(".cover").hide();
    //      $(".pop").hide();
        
    //    });
    //  });
  }
  
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }
  uploadpayslips()
  {
    let  senddata1 = new FormData();
    //senddata.fullid= this.fullid
    senddata1.append('imageproduct', this.filesToUpload[0], this.filesToUpload[0].name);
    console.log(File+" file")
    senddata1.append('month',this.empData.month);
    senddata1.append('year',this.empData.year);
   senddata1.append('name',this.empData.name);
   console.log(this.empData.month)
    //console.log(senddata+"senddata")
    //console.log(this.senddata1)
    this._auth.uploadpayslips(senddata1)
    .subscribe((res)=>{
      console.log(res)
      this.myArray=res[0]
      //alert(this.myArray)
      console.log(this.empData)

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
