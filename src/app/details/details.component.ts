import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http: Http) { }
  empData = {
   
    fullid:localStorage.getItem('fulli')
   
  
  }
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
 



  ngOnInit() {
    console.log(this.empData.fullid +"fulli is");
    const viewemployee  = new FormData();
    ///const file: File = this.filesToUpload[0];
  
    viewemployee.append('fullid',this.empData.fullid);
   
    this._auth.viewemployee(viewemployee)
    .subscribe(
      (res)=>{

        

        //console.log("sampath")
        console.log(res);

        
      

        this.email=res[0].email
        console.log(this.email)
         this.name=res[0].name
         this.id=res[0].fullid
         this.DOJ=res[0].DOJ
         this.DOB=res[0].DOB
         this.phone=res[0].phone
         this.gender=res[0].gender
         this.photo=res[0].photo
         console.log(res[0].photo)
      }

    )
    
  
  }

}
