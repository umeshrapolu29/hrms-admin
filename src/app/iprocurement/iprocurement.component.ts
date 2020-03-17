import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-iprocurement',
  templateUrl: './iprocurement.component.html',
  styleUrls: ['./iprocurement.component.scss']
})
export class IprocurementComponent implements OnInit {
  item:string='';
  name1:string='';
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
  array:any;
  array2:any
  array1:any;
  empName:any;

  photo:string;
  empData = { 
    tid:'',
    status:'',
    
 
  }
  empData1={
    status:'',
    name:'',
  
  }
 
  constructor(private _auth: AuthService,
    private _router: Router, private _httpclient:HttpClient,private http1:Http,) { }

  ngOnInit() {
    this.http1.get('https://hrmsbackend.herokuapp.com/user/getusernamesiprocurement')
    .subscribe(
      (res)=>{
        console.log("heklo")
        console.log(res)
        this.array=res;
        var jsonObj = JSON.parse(this.array._body);
        console.log(jsonObj.data)
        this.array=jsonObj.data;
        
      }
    )
  }
 
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
     getiprocurementdata(){
      console.log("inside application")
      const leavedata=new FormData()
      leavedata.append('tid',this.empData1.name)
      console.log(this.empData1.name);
      this._auth.getiprocurementdata(leavedata).subscribe((res)=>{
        console.log(res);
        this.array1=res
        var jsonObj = JSON.parse(this.array1._body);
        console.log(jsonObj)
        this.array2=jsonObj.data;
        console.log(this.array2)
        console.log(this.array2.email)
        localStorage.setItem('iproemail',this.array2.email)
        this.name1= this.array2.employeename;
        this.item1= this.array2.item;
        this.description1= this.array2.description;
        this.amount1= this.array2.amount;
        this.tid= this.array2.TID;
        localStorage.setItem('iproid',this.array2.TID)
        localStorage.setItem('iproname',this.name1)
        console.log( this.amount1 )

      })

      

      console.log("inside getleavedata");
     }
     sendstatus(){
      //  console.log("hello11222")
      //  console.log(selected.TID)
      //  console.log(selected.employeename+"name is");
   
     
      //console.log("datat....2"+this.fullid);
      let  senddata1 = new FormData();
      //senddata.fullid= this.fullid
   
      senddata1.append('astatus',this.empData.status);
      // senddata1.append('TID',selected.TID);
      // senddata1.append('name',selected.employeename);
      senddata1.append('iproemail', localStorage.getItem('iproemail'));
      senddata1.append('TID', localStorage.getItem('iproid'));
      senddata1.append('name', localStorage.getItem('iproname'));
   
      console.log(senddata1+"senddata")
      this._auth.sendstatusipro(senddata1)
      .subscribe((res)=>{
        console.log(res)
        console.log(this.empData)
        this.array2=res;
     
        var jsonObj = JSON.parse( this.array2._body);
        console.log(jsonObj.msg)
        this.array2=res;
      
        var jsonObj = JSON.parse( this.array2._body);
        console.log(jsonObj.msg)
        if(jsonObj.msg=="data retrived"){
          Swal.fire('','Response send  Successfully','success')
          this._router.navigate(['/homepage'])

        }
        else{
          Swal.fire('','Response  Failed','error')
          this._router.navigate(['/homepage'])
        }
  
      }
      )
     }
        
  }

 


