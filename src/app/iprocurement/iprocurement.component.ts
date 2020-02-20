import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iprocurement',
  templateUrl: './iprocurement.component.html',
  styleUrls: ['./iprocurement.component.scss']
})
export class IprocurementComponent implements OnInit {
  item:string='';
  description:string='';
  amount:string='';
  tid:string='';
  Ename:string='';
  fullid:string='';
  item1:string='';
  description1:string='';
  amount1:string='';
  tid1:string='';
  Ename1:string='';
  fullid1:string='';
  item2:string='';
  description2:string='';
  amount2:string='';
  tid2:string='';
  Ename2:string='';
  fullid2:string='';
  item3:string='';
  description3:string='';
  amount3:string='';
  tid3:string='';
  Ename3:string='';
  fullid3:string='';
  myArray:any;

  photo:string;
  empData = { 
    tid:'',
    status:'',
    
 
  }
 
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient) { }

  ngOnInit() {
    this._httpclient.get('http://localhost:3000/IProcurement/getDataAdmin')
    .subscribe(
      (res)=>{
        console.log("heklo")
        console.log(res)
        this.myArray=res;
        this.item = this.myArray[0].item;
        this.fullid=this.myArray[0].fullid;
        console.log(this.item)
         this.item=res[0].item
         this.description=res[0].description
         this.amount=res[0].amount
     this.Ename=res[0].employee
         this.fullid=res[0].fullid
         this.tid=res[0].tid
         this.item1=res[1].item
         this.description1=res[1].description
         this.amount1=res[1].amount
     this.Ename1=res[1].employee
         this.fullid1=res[1].fullid
         this.tid1=res[1].tid
         this.item2=res[2].item
         this.description2=res[2].description
         this.amount2=res[2].amount
     this.Ename2=res[2].employee
         this.fullid2=res[2].fullid
         this.tid2=res[2].tid
         this.item3=res[3].item
         this.description3=res[3].description
         this.amount3=res[3].amount
     this.Ename3=res[3].employee
         this.fullid3=res[3].fullid
         this.tid3=res[3].tid
       //  console.log(this.reqtype)
      //   console.log("datat"+this.fullid);
      }
    )
  }
  // searchid(){
  //   let  sendid = new FormData();
  //   //senddata.fullid= this.fullid
  //   sendid.append('tid',this.empData.tid);
  //   //sendid.append('fullid',this.tid);
  //   //console.log(sendid+"senddata")
  //   this._auth.searchid(sendid)
  //   .subscribe((res)=>{
  //     console.log("iprocurement")
  //     console.log(res+"res is")
  //     //console.log(this.empData)
  //     }
  //   ) 
  // }
  searchname()
  {
    
      console.log('inside of function')
       //console.log(this.viewemployee1)
       const viewemployee  = new FormData();
       ///const file: File = this.filesToUpload[0];
     
       viewemployee.append('tid',this.empData.tid);
      
       this._auth.viewemployee1(viewemployee)
       .subscribe(
         (res)=>{
           console.log("sampath")
           console.log(res);
           // this.email=res[0].email
           // this.name=res[0].name
           // this.id=res[0].fullid
           // this.DOJ=res[0].DOJ
           // this.DOB=res[0].DOB
           // this.gender=res[0].gender
            this.photo=res[0].photo
           
            console.log(this.photo)
            
         }
   
       )
     }
     sendstatus(){
      var id=this.tid
      console.log(this.tid+"id111 is")
      console.log(this.fullid+"fullid is")
      //console.log("datat....2"+this.fullid);
      let  senddata1 = new FormData();
      //senddata.fullid= this.fullid
      senddata1.append('status',this.empData.status);
      senddata1.append('tid',this.tid);
      senddata1.append('fullid',this.fullid);
      //console.log(senddata+"senddata")
      this._auth.sendstatusipro(senddata1)
      .subscribe((res)=>{
        console.log(res)
        console.log(this.empData)
  
      }
      )
     }
        
  }

 


