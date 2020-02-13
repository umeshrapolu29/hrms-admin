import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';



@Component({
  selector: 'app-viewemployeelist',
  templateUrl: './viewemployeelist.component.html',
  styleUrls: ['./viewemployeelist.component.scss']
})
export class ViewemployeelistComponent implements OnInit {
  name:any;
  fullid:any;

  heroes:[];
  empData = { 
    fullid:''
    
 
  }
  viewemployee1={
    names:'',
    fullid:''
  };
 
  name1:string='';
  fullid1:string='';
  name2:string='';
  fullid2:string='';
  name3:string='';
  fullid3:string='';
  name4:string='';
  fullid4:string='';
 

  
  

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }

  ngOnInit() {
   
    this._httpclient.get('https://zyclyx-app.herokuapp.com/TestAdmin/getUsersList')
    .subscribe(
      (res:any[])=>{
     
 

        console.log( localStorage.getItem('token'))
        console.log(res);
       
              this.name=res[0].name;
              this.fullid=res[0].fullid;
              this.name1=res[1].name;
              this.fullid1=res[1].fullid;
              this.name2=res[2].name;
              this.fullid2=res[2].fullid;
              this.name3=res[3].name;
              this.fullid3=res[3].fullid;
              this.name4=res[4].name;
              this.fullid4=res[5].fullid;
              //   this.image=res[0].photo;
              //  this.found=true;

            //  console.log(this.email+"email is");
            //  console.log(this.image+" image is");
            
      }
        
    )
  }
  viewemployee()
  {
   console.log('inside of function')
    console.log(this.viewemployee1)
    const viewemployee  = new FormData();
    ///const file: File = this.filesToUpload[0];
  
    viewemployee.append('fullid',this.empData.fullid);
   
    this._auth.viewemployee(viewemployee)
    .subscribe(
      (res)=>{
        console.log("sampath")
        console.log(res);
      }

    )
  }
 

}
