import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  success:any;
  Yes:any;
  holidayType:any;
  constructor(private _auth: AuthService,
    private _router: Router) { }
    addholidaydata={    
    holidaytype:'',
   
    reason:'',
    date:'',

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
    const holidaytype1= new FormData()
    console.log(this.leavedata.holidayType+"type")
    holidaytype1.append('holidayType',this.leavedata.holidayType)

    this._auth.holidaytype(holidaytype1)
    .subscribe(
      res => {
        console.log(res)
         this.myArray=res;
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
         console.log(res +"res is ")
      //   if(localStorage.getItem('token')=="undefined")
      //   {
      //     this._router.navigate(['/signin'])
      //   }
      //   else{
      //     //console.log('routed')
      //   this._router.navigate(['/addnotice'])
      //   }
      // },
      // err => {
      //   if( err instanceof HttpErrorResponse ) {
      //     if (err.status === 401) {
      //       this._router.navigate(['/viewnotice'])
      //     }
      //   }
      }
    )
  }

  

}
