import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  success:any;
  Yes:any;
  holidayType:any;
  array1:any;
  array2:any;
  constructor(private _auth: AuthService,
    private _router: Router) { }
    addholidaydata={    
    holidaytype:'',
   
    reason:'',
    date:'',
    dayofweek:'',

       token: localStorage.getItem('token') }
    
   
  Type:string='';
 
  day:string='';
  myArray:any;
  file1:string;
  leavedata={
      type:'',
       fromDate:'',
       toDate:'',
       reason:'',
       holidayType:'',
       fullid:localStorage.getItem('fullid')
     }

  ngOnInit() {
  
    
  }
  // 
  holidaytype()

  {
    console.log("inside holiday");
    const holidaytype1= new FormData()
    // console.log(this.leavedata.holidayType+"type")
    holidaytype1.append('holidaytype',this.leavedata.holidayType)
    console.log(this.leavedata.holidayType)

    this._auth.holidaytype(holidaytype1)
    .subscribe(
      res => {
        console.log(res)
         this.myArray=res;
         var jsonObj = JSON.parse(this.myArray._body);
         console.log(jsonObj.data)
         this.array1=jsonObj.data
        
        // console.log(this.myArray[0].reason)
        // this.reason=res[0].reason
        // this.Type=res[0].holidaytype
        // this.date=res[0].date
        // this.day=res[0].dayofweek
        // this.file1=res[0].file
        // console.log(res[0].file+"photo")

      }
    )
  }
  addholiday()
  {
    console.log(this.addholidaydata)
    this._auth.addholiday(this.addholidaydata)
    .subscribe(
      res => {
        console.log("inside hollyday");
         console.log(res)
         this.array2=res;
    
        var jsonObj = JSON.parse( this.array2._body);
        console.log(jsonObj.msg)
        if(jsonObj.msg=="addholiday data inserted"){
          Swal.fire('','Holiday added  Successful','success')
          this._router.navigate(['/homepage'])

        }
        else{
          Swal.fire('','Holiday added Failed','error')
          this._router.navigate(['/homepage'])
        }
      
      }
    )
  }

  

}
