import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http,Response,Headers} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DilogeComponent } from 'app/diloge/diloge.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  //  template:`<h1>data</h1>
  //           <div *ngIf="found">
  //         <li>{{email}}</li>

  //         </div>
  //  `,
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent  {
  searchText : string;

  array:any;
  img:any;
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
    fullid:'',
    cnf_pswd:'',
    resgination:'',
    reportmanager:'',
    nextimmadiatemanager:'',
    hrmanager:'',
    
    //confirmpassword: '',
    token: localStorage.getItem('token'),
    id:localStorage.getItem('id')
  
  }

  d:any
  employees={token: localStorage.getItem('token')};
  email:String='';
  found:boolean=false;
  image:String='';
  name:string;
  DOJ:string;
  DOB:string;
  phone:string;
  photo:string;
  gender:string;
  id:number;
  myArray:any;
 
  fullImagePath: string;
  getdetails={};
 


  datas:any=[
{
    "email": "sampath@gmail.com",
    "password": "$2b$10$QvVZi.MWBP93gqdyGre9y.GocVyvL/JcPQOqFCNI522bIs9Gp1Sv.",
    "created": "2019-08-07 11:53:32.678",
    "id": 1,
    "fullid": "ZYX_2019_08_1",
    "reason": "Reason",
    "reqtype": "sick",
    "requestto": null,
    "status": "Approved",
    "name": "sampath kumar",
    "photo": "http://localhost:3000/images/bga.jpg",
    "DOJ": "2019-08-14",
    "DOB": "2019-08-06",
    "gender": "male",
    "phone": "9966218131",
    "fromdays": "2019-08-14",
    "todays": "2019-08-16"

}
  ]

  public emoployeeData: FormGroup
  public filesToUpload: Array<File> = [];
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http: Http,public dialog: MatDialog,private _snackBar: MatSnackBar) { }
    openSnackBar() {      
      this._snackBar.open("Details saved successfully!!", "", { 
       duration: 5000,
       });  
   }
    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      // this.fileName = this.filesToUpload[0].name;
    }
    openDialog(): void {
      
      const dialogRef = this.dialog.open(DilogeComponent, {
        
     
      });
      
    
      dialogRef.afterClosed().subscribe(result => {
       
      });
    }
    
   
  ngOnInit() {
    
    
    this.http.get('https://hrmsbackend.herokuapp.com/user/getallemployeenames')
    .subscribe(
      (res)=>
      {
        console.log('===>', res)
        this.myArray=res;
        this.myArray=res
        var jsonObj = JSON.parse(this.myArray._body);
        console.log(jsonObj)
        this.myArray=jsonObj.data;
        console.log(this.myArray)
       

      }
      
    )

   
      }
      viewemployee(selected:any)
  {
   console.log('inside of function')
    //console.log(this.viewemployee1)
    const viewemployee  = new FormData();
    ///const file: File = this.filesToUpload[0];
  
    viewemployee.append('fullid',this.empData.fullid);
    localStorage.setItem('viewdetailsemail1',selected.email)
    
    this._router.navigate(['/details'])
   
  }
  addemployee() {
    
    console.log("addemployee")
    console.log(this.empData.DOJ +"id is")
    const payload = new FormData();
    const file: File = this.filesToUpload[0];
     this.img=this.filesToUpload[0]
     console.log( this.img+"img is")
     
    this.fullImagePath = '//assets//img//logo.png';
    console.log(  this.fullImagePath+"img is");

    if(this.img==null){
      console.log("inside if condition")
      payload.append('file',  this.fullImagePath);
  
    // console.log(File+" file")
    payload.append('firstname',this.empData.first_name);
    payload.append('lastname',this.empData.last_name);
    payload.append('email',this.empData.email);
    payload.append('password', this.empData.password);
    payload.append('DOJ',this.empData.DOJ);
    payload.append('phonenumber',this.empData.phonenumber),
    payload.append('gender',this.empData.gender),
    payload.append('DOB',this.empData.DOB),
    payload.append('token',this.empData.token)
    payload.append('id',this.empData.id)
    payload.append('resgination',this.empData.resgination)
    payload.append('reportmanager',this.empData.reportmanager)
    payload.append('nextimmediatemanager',this.empData.nextimmadiatemanager)
    payload.append('hrmanager',this.empData.hrmanager)
    console.log(this.empData.resgination);
 
   
    this._auth.uploadSheet(payload)
      .subscribe(
        res => {
          console.log(res)
          this.array=res;
          var jsonObj = JSON.parse(this.array._body);
              console.log(jsonObj.msg)

            if(jsonObj.msg=="uploaded Successfull")
            {
              Swal.fire('','uploaded Successful','success')
              this._router.navigate(['/homepage'])
            }
            else{
              Swal.fire('','uploaded failed','error')
            }
    
         }
      )
        }else{
          console.log("inside else block")
          payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
          // console.log(File+" file")
          payload.append('firstname',this.empData.first_name);
          payload.append('lastname',this.empData.last_name);
          payload.append('email',this.empData.email);
          payload.append('password', this.empData.password);
          payload.append('DOJ',this.empData.DOJ);
          payload.append('phonenumber',this.empData.phonenumber),
          payload.append('gender',this.empData.gender),
          payload.append('DOB',this.empData.DOB),
          payload.append('token',this.empData.token)
          payload.append('id',this.empData.id)
          console.log("hello inside");
       
         
          this._auth.uploadSheet(payload)
            .subscribe(
              res => {
                console.log(res)
                this.array=res;
                var jsonObj = JSON.parse(this.array._body);
                    console.log(jsonObj.msg)
      
                  if(jsonObj.msg=="uploaded Successfull")
                  {
                    Swal.fire('','uploaded Successful','success')
                    this._router.navigate(['/homepage'])
                  }
                  else{
                    Swal.fire('','uploaded failed','error')
                  }
          
               }
            )
        }
  }
  viewemployee1(selected:any){

 const viewemployee1  = new FormData();
 viewemployee1.append('id',selected._id);
 console.log("inside details");
 console.log(selected._id+"id is")
 localStorage.setItem('deletedid',selected._id)


  }

  priview(){   
    $(".imgAdd").click(function(){
      $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
  });
  $(document).on("click", "i.del" , function() {
    $(this).parent().remove();
});
  $(function() {
    $(document).on("change",".uploadFile", function()
    {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        // if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
        
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
            
            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
        
    });
});    
  }  
  alert(){
    alert("Added auccessfully");
  }  
  
 
  
  
}
