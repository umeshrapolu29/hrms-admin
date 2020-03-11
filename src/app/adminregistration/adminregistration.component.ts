import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http,Response,Headers} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.scss']
})
export class AdminregistrationComponent implements OnInit {

 
  loginUserData = {
    name:"",
    email:"",
    password:'',

  }
  array4:any;
  file:any;
  public emoployeeData: FormGroup
  public filesToUpload: Array<File> = [];
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http: Http) { }
    fileChangeEvent(fileInput: any) {

    this.filesToUpload = <Array<File>>fileInput.target.files;
    // this.fileName = this.filesToUpload[0].name;
  }

  ngOnInit() {
  }


  loginUser(){
    console.log("inside  block")
    console.log(this.loginUserData)
    const payload = new FormData();
          payload.append('file', this.filesToUpload[0], this.filesToUpload[0].name);
           console.log(File+" file")
          payload.append('firstname',this.loginUserData.name);
    
          payload.append('email',this.loginUserData.email);
          payload.append('password', this.loginUserData.password);
          this._auth.adminregister(payload).subscribe((res)=>{
            console.log(res);
            this.array4=res
        var jsonObj = JSON.parse(this.array4._body);
        console.log(jsonObj)
        this.array4=jsonObj.msg;
        console.log( this.array4)
        if( this.array4=="admin register successfully")
        {
          Swal.fire('','Registration successfully','success')
          this._router.navigate(['/signin'])
         
        }
        else{
          Swal.fire('','Login Failed','error')
          this._router.navigate(['/registration'])
        }

          
          })

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


