import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';

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
  educationaldata={
    tenth:'',
    intermediate:'',
    degree:'',
    pg:''

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
  array:any;
  array2:any;
  school:string='';
  collegeOne:string='';
  collegeTwo:String='';
  pg:String='';
  leavedata={
   
    email:localStorage.getItem('email1')
  }



  ngOnInit() {

    this.http.post('http://localhost:3001/user/geteducationaldetails',{
      
        empname:localStorage.getItem('viewdetailsemail1')
      }).subscribe((res)=>{
          console.log(res);
          this.array2=res;
          var educationDetails = JSON.parse(this.array2._body);              
            this.school=educationDetails.data.tenth         
            this.collegeOne=educationDetails.data.intermediate
            this.collegeTwo=educationDetails.data.degree
            console.table(educationDetails)
      })

    



    this.http.post(`https://hrmsbackend.herokuapp.com/user/getuserdata`,
    {
      email:this.leavedata.email
    })
    .subscribe(
      res=>{
        //console.log("hello")
        console.log("inside view details");
        console.log(this.leavedata.email)
        console.log(res);
        this.array=res;
        var jsonObj = JSON.parse(this.array._body);
            console.log(jsonObj)
            this.photo=jsonObj.data.file
            console.log(this.photo)
         this.email=jsonObj.data.email
        
          this.name=jsonObj.data.name
          this.id=jsonObj.data.fullid
          console.log(this.id+"id is")
          this.DOJ=jsonObj.data.DOJ
          this.DOB=jsonObj.data.DOB
          this.phone=jsonObj.data.phonenumber
        this.gender=jsonObj.data.gender
        this.photo=jsonObj.data.photo
    
      }
    )
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
  educationaldetails(){
    const educationaldetails= new FormData()
    console.log(this.educationaldata+"data")
    // console.log(this.leavedata.holidayType+"type")
    educationaldetails.append('tenth',this.educationaldata.tenth)
    educationaldetails.append('intermediate',this.educationaldata.intermediate)
    educationaldetails.append('degree',this.educationaldata.degree)
    educationaldetails.append('pg',this.educationaldata.pg)
    educationaldetails.append('empname',localStorage.getItem('viewdetailsemail1'))
    this._auth.educationaldetails(educationaldetails).subscribe((res)=>{
      console.log(res);
    })

  }

}
