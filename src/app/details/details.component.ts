import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';
import Swal from 'sweetalert2'

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
  bankdata={
    accountholder:'',
    accountnumber:'',
    bankname:'',
    pannumber:'',
    ifsccode:'',
    branch:'',

  }
  personaldetailsdata={
    primaryemail:'',
    secondaryemail:'',
    primaryphone:'',
    secondaryphone:'',
    guardian:'',
    guardiannumber:'',

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
  reportingmanager:string;
  nexttoreportingmanager:string;
  hrmanager:String;

  id:number; 
  array:any;
  array2:any;
  bankdetailsarray:any;
  bankdetails:any;
  school:string='';
  collegeOne:string='';
  collegeTwo:String='';
  collegeThree:String='';
  pg:String='';
  accountholder:String=''
  accountnumber:String=''
  bankname:String=''
  pannumber:String=''
  branch:String=''
  ifsccode:String=''
  lastname:String=''
  primaryemail:String='';
  secondaryemail:String='';
  primaryphone:String=''
  secondaryphone:String=''
  guardian:String=''
  guardianphone:String='';
  personaldetailsarray:any
  personaldetails1:any;

  leavedata={
   
    email:localStorage.getItem('email1')
  }



  ngOnInit() {

     
    



    this.http.post(`https://hrmsbackend.herokuapp.com/user/getuserdata`,
    {
      email:localStorage.getItem('viewdetailsemail1')
    })
    .subscribe(
      res=>{
        //console.log("hello")
        console.log("inside view details");
        console.log(this.leavedata.email)
        console.log(res);
        this.array=res;
        var jsonObj = JSON.parse(this.array._body);
            console.table(jsonObj)
            this.photo=jsonObj.data.file
            console.log(this.photo)
         this.email=jsonObj.data.email
        
          this.name=jsonObj.data.firstname
          this.lastname=jsonObj.data.lastname
          this.name=this.name+" "+ this.lastname
          console.log(this.name+"name is")
          this.id=jsonObj.data.fullid
          console.log(this.id+"id is")
          this.DOJ=jsonObj.data.DOJ
          this.DOB=jsonObj.data.DOB
          this.reportingmanager=jsonObj.data.reportmanager
          this.nexttoreportingmanager=jsonObj.data.immediatereportmanager
          this.hrmanager=jsonObj.data.HRmanager
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

        

        console.log("sampath")
        console.table(res);

        
      

        this.email=res[0].email
        console.log(this.email)
         this.name=res[0].firstname;
         console.log(this.name)
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
      this.array2=res;
     
      var jsonObj = JSON.parse( this.array2._body);
      console.log(jsonObj.msg)
      this.array2=res;
    
      var jsonObj = JSON.parse( this.array2._body);
      console.log(jsonObj.msg)
      if(jsonObj.msg=="data inserted"){
        Swal.fire('','upadated Sucessfuly','success')
        this._router.navigate(['/homepage'])

      }
      else{
        Swal.fire('','Failed to updated','error')
        this._router.navigate(['/homepage'])
      }


    })

  }
  dankdetails(){
    console.log("inside bankdetails");
    const bankdetails= new FormData()
    console.log(this.educationaldata+"data")
    // console.log(this.leavedata.holidayType+"type")
    bankdetails.append('Accountholdername',this.bankdata.accountholder)
    bankdetails.append('Accountnumber',this.bankdata.accountnumber)
    bankdetails.append('Bankname',this.bankdata.bankname)
    bankdetails.append('pannumber',this.bankdata.pannumber)
    bankdetails.append('IFSCcode',this.bankdata.ifsccode)
    bankdetails.append('branch',this.bankdata.branch)
    bankdetails.append('empname',localStorage.getItem('viewdetailsemail1'))
    this._auth.bankdetails(bankdetails).subscribe((res)=>{
      console.log(res);
      this.array2=res;
      var jsonObj = JSON.parse( this.array2._body);
      console.log(jsonObj.msg)
  
    
      var jsonObj = JSON.parse( this.array2._body);
      console.log(jsonObj.msg)
      if(jsonObj.msg=="data inserted"){
        Swal.fire('','upadated Sucessfuly','success')
        this._router.navigate(['/homepage'])

      }
      else{
        Swal.fire('','Failed to updated','error')
        this._router.navigate(['/homepage'])
      }
    })

  }
  vieweducationdetails(){
    console.log("inside employee details");
    
    this.http.post(' https://hrmsbackend.herokuapp.com/user/geteducationaldetails',{
      
        empname:localStorage.getItem('viewdetailsemail1')
      }).subscribe((res)=>{
          console.log(res);
          this.array2=res;
          var educationDetails = JSON.parse(this.array2._body);              
            this.school=educationDetails.data.tenth         
            this.collegeOne=educationDetails.data.intermediate
            this.collegeTwo=educationDetails.data.degree
            this.collegeThree=educationDetails.data.pg
            console.table(educationDetails)
      })

  }
  viewbankdetails(){
    this.http.post(' https://hrmsbackend.herokuapp.com/user/getbankdetails',{
      
      empname:localStorage.getItem('viewdetailsemail1')
    }).subscribe((res)=>{
      console.log("bank details");
        console.log(res);
        this.bankdetailsarray=res;
        var bankdetails = JSON.parse(this.bankdetailsarray._body);              
          this.accountholder=bankdetails.data.Accountholdername         
          this.accountnumber=bankdetails.data.Accountnumber
          this.bankname=bankdetails.data.Bankname
          this.pannumber=bankdetails.data.pannumber         
          this.branch=bankdetails.data.branch
          this.ifsccode=bankdetails.data.IFSCcode
          console.log( this.ifsccode);
          console.table(bankdetails)
    })

  }
  personaldetails(){
    const personaldetails= new FormData()
    console.log(this.educationaldata+"data")
    // console.log(this.leavedata.holidayType+"type")
    personaldetails.append('primaryemailid',this.personaldetailsdata.primaryemail)
    personaldetails.append('secondaryemailid',this.personaldetailsdata.secondaryemail)
    personaldetails.append('primaryphone',this.personaldetailsdata.primaryphone)
    personaldetails.append('secondaryphone',this.personaldetailsdata.secondaryphone)
    personaldetails.append('gaurdain',this.personaldetailsdata.guardian)
    personaldetails.append('gaurdainnumber',this.personaldetailsdata.guardiannumber)
    personaldetails.append('empname',localStorage.getItem('viewdetailsemail1'))
    console.log(this.personaldetailsdata.primaryphone,this.personaldetailsdata.secondaryphone)
    this._auth.personaldetails(personaldetails).subscribe((res)=>{
      console.log(res);
      console.log("hello")
     
      this.array2=res;
    
      var jsonObj = JSON.parse( this.array2._body);
      console.log(jsonObj.msg)
      if(jsonObj.msg=="data inserted"){
        Swal.fire('','upadated Sucessfuly','success')
        this._router.navigate(['/homepage'])

      }
      else{
        Swal.fire('','Failed to updated','error')
        this._router.navigate(['/homepage'])
      }
    })
  }
  viewpersonaldetails(){
    this.http.post('https://hrmsbackend.herokuapp.com/user/getpersonaldetails',{
      
      empname:localStorage.getItem('viewdetailsemail1')
    }).subscribe((res)=>{
      console.log("personal details");
      console.log(localStorage.getItem('viewdetailsemail1'))
        console.log(res);
        this.personaldetailsarray=res;
        console.table(personaldetails1)
        var personaldetails1 = JSON.parse(this.personaldetailsarray._body);              
          this.primaryemail=personaldetails1.data.primaryemailid         
          this.secondaryemail=personaldetails1.data.secondaryemailid
          this.primaryphone=personaldetails1.data.primaryphone
          this.secondaryphone=personaldetails1.data.secondaryphone         
          this.guardian=personaldetails1.data.gaurdain
          this.guardianphone=personaldetails1.data.gaurdainnumber
          console.log( this.ifsccode);
          console.table(personaldetails1)
    })
  }

}
