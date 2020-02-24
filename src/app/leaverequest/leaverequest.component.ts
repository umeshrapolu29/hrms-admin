import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { send } from 'q';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss']
})
export class LeaverequestComponent implements OnInit {
  ename:string='';
  ename1:string='';
  ename2:string='';
  fullid:any;
  empName:any;

  empData={
    status:'',
    name:'',
  
  }

  
 

  Ename:string='';
  reason:string='';
  //fullid:any
  fromdays:string='';
  todays:string='';
  reqtype:string='';
  myArray:any;

  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }
    
    
  ngOnInit() {
    console.log("gud")
    this._httpclient.get('http://localhost:3000/LeaveRequest/getAdmins')
    .subscribe(
      (res)=>{
        console.log(res)
        this.myArray=res
        // this.ename=this.myArray[0].name
        // console.log(this.myArray[0].name +"name is")
        // this.ename=res[0].name
        
        // console.log(this.ename)
        //this.name2=res[2].name
        console.log("hey");
      }
    )
    // this._httpclient.get('http://localhost:3000/LeaveRequest/getLeaveData')
    // .subscribe(
    //   (res)=>{
    //     console.log("heklo")
    //     console.log(res)
    //     this.Ename=res["name"]
    //     this.reason=res["reason"]
    //     this.fullid=res["fullid"]
    //     this.fromdays=res["fromdays"]
    //     this.todays=res["todays"]
    //     this.reqtype=res["reqtype"]
    //   //  console.log(this.reqtype)
    //     console.log("datat"+this.fullid);
    //   }
    // )
  }
  leaveapplication()
  {
    const leavedata=new FormData()
    leavedata.append('name',this.empData.name)
    console.log(this.empData)
    this._auth.leaveappliaction(leavedata)
    .subscribe((res)=>{
      
      console.log(res)
      //this.myArray=res

      console.log(res["reason"])
      this.reason=res["reason"]
      console.log(this.reason)
      this.Ename=res["name"]
       this.reason=res["reason"]
           this.fullid=res["fullid"]
           console.log(this.fullid+"fullid is")
           this.fromdays=res["fromdays"]
          this.todays=res["todays"]
           this.reqtype=res["reqtype"]

    }
    )
  }
  senddata()
  {
    

    
    var id=this.fullid
    //console.log(id+"id is")
    //console.log("datat....2"+this.fullid);
    let  senddata = new FormData();
    //senddata.fullid= this.fullid
    senddata.append('status',this.empData.status);
    senddata.append('fullid',this.fullid);
    //console.log(senddata+"senddata")
    this._auth.sendstatus(senddata)
    .subscribe((res)=>{
      console.log("senddata")
      console.log(res+"res is")
    
      console.log(this.empData)

    }
    )
  }
  
  }


