import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { send } from 'q';
import Swal from 'sweetalert2'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss']
})
export class LeaverequestComponent implements OnInit {
 leavedataarray1:Array<String>;
  
  ename:string='';
  ename1:string='';
  ename2:string='';
  arr: Array<any>;
  leavedata={
    name:'',
    date:''
  }

  file:any;
  fullid:any;
  empName:any;
  array:any;
  array1:any;
  array2:any;
  array3:any;
  array4:any;

  empData={
    status:'',
    name:'',
    reason:'',
  
  }
  empData1={
    file:'',
    month:'',
    year:'',
    name:'',
  
  }

  
 

  Ename:string='';
  reason:string='';
  //fullid:any
  fromdays:string='';
  todays:string='';
  reqtype:string='';
  myArray:any;
  leavedatarray:any;

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http1: Http) { }
    
    
  ngOnInit() {
    // this.leavedataarray1[0]="umesh"
    console.log(this.leavedataarray1.push("hi")+"array isss")
    
    console.log("gud")
    this.http1.get('https://hrmsbackend.herokuapp.com/user/getleaveemployee')
    .subscribe(
      (res)=>{
        console.log(res)
        this.myArray=res
        var jsonObj = JSON.parse(this.myArray._body);
        console.log(jsonObj)
        this.array=jsonObj.data
        console.log( this.array)
        // this.ename=this.myArray[0].name
        // console.log(this.myArray[0].name +"name is")
        // this.ename=res[0].name
        
        // console.log(this.ename)
        //this.name2=res[2].name
        console.log("hey");
      }
    )
    
  }
  leaveapplication()
  {
    console.log("inside application")
    const leavedata=new FormData()
    leavedata.append('name',this.empData.name)
    console.log("inside getleavedata");
    console.log(this.empData)
    this._auth.leaveappliaction(leavedata)
    .subscribe((res)=>{
      
      console.log(res)
      this.array1=res
      var jsonObj = JSON.parse(this.array1._body);
      console.log(jsonObj)
      this.array2=jsonObj.data;
      console.log(this.array2)
      this.array3=this.array2[0].reason
      console.log(this.array3)
      localStorage.setItem('email',this.array2[0].requestto)
      localStorage.setItem('id',this.array2[0]._id)
     

    
      this.reason=this.array2[0].reason
      
      this.Ename=this.array2[0].name

    
         
          
           this.fromdays=this.array2[0].fromdate
          this.todays=this.array2[0].todate
           this.reqtype=this.array2[0].reqtype

    }
    )
  }
  senddata()
  {
    

    
    var id=this.fullid
   
    let  senddata = new FormData();
   
    senddata.append('status',this.empData.status);
    senddata.append('reason',this.empData.reason);
    senddata.append('name', this.Ename);
    console.log( this.Ename+"name is")
    senddata.append('requestto', localStorage.getItem('id'));
    senddata.append('email', localStorage.getItem('email'));
    console.log(localStorage.getItem('email')+"email is")
    console.log( localStorage.getItem('id')+"senddata")
    this._auth.sendstatus(senddata)
    .subscribe((res)=>{
      
      console.log(res)
      this.array4=res
      var jsonObj = JSON.parse(this.array4._body);
      console.log(jsonObj)
      this.array4=jsonObj.msg;
      console.log( this.array4)
      // console.log( this.array4.requestto)
      if(this.array4=="leavestatus Update"){
        Swal.fire('','Response Updated Successful','success')
          this._router.navigate(['/homepage'])
      }
      else{
        Swal.fire('','Response Updated Failed','error')
        this._router.navigate(['/homepage'])
      }
    
   

    }
    )
  }
  levetakendata($event){
    console.log(this.empData1);
    let  senddata1 = new FormData();
    senddata1.append('month',this.empData1.month);
    senddata1.append('year',this.empData1.year);
  
    this._auth.leavetakendata(senddata1).subscribe(res=>{
      console.log(res);
      this.leavedatarray=res;
      var jsonObj = JSON.parse(this.leavedatarray._body);
        console.log(jsonObj)
        this.leavedatarray=jsonObj.data
        console.log(this.leavedatarray)
        var lengt=this.leavedatarray.length
        console.log(lengt+"length is")
      this.arr=this.leavedatarray.name
      this.leavedataarray1[0]="umesh"
      console.log(this.leavedataarray1+"array is")
      console.log(this.leavedatarray[0].name)
      // for (let i = 0; i < lengt; i++) {
      //   console.log("inside for")
      //      this.leavedataarray1=this.leavedatarray[i].reasons
      //     console.log(this.leavedatarray[i].reason)

          

          
      // } 
     
      

      const fileName = 'test.xlsx';

      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.leavedatarray);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'test');
  
      XLSX.writeFile(wb, fileName);
    })
  }
  
  }


