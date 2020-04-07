import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar, MatDialog } from '@angular/material';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']

})
export class AttendenceComponent implements OnInit {
  // @ViewChild('TABLE') table:ElementRef;
  @ViewChild('TABLE', { static: true }) table: ElementRef;

  myArray:any;
  ;
  array2:any;



  constructor( private http:Http,private _auth: AuthService,  private _router: Router ) { }
  entries = [];
    selectedEntry;
    mydate=Date.now();

    isSubmitted = false;
    attendencestatus:any;
    name11: string;


  leavedata:any={
    status:'',
    date:'',
   
    email:localStorage.getItem('email1')
  }
  aattendencedata={
    name:'',
    reason:'',
    date:'',
    
  }




 





  onSelectionChange(entry) {
    console.log("inside method")
    this.selectedEntry = entry;
    console.log(this.selectedEntry)
}



submitForm(form: NgForm) {
  this.isSubmitted = true;
  if(!form.valid) {
    return false;
  } else {

    
    console.log(form.value)
    var status='';
     var person=form.value
    var name;
     for( name in person ){
       name=person[name];
     }
     console.log(name);
     this.name11=name;
     localStorage.setItem('attendencestatus',this.attendencestatus)

     console.log(this.name11+"name isss")
     console.log(this.table.nativeElement);
     const attendence= new FormData()
     attendence.append('status',name)
     attendence.append('name',localStorage.getItem('attendencename'))
     attendence.append('email',localStorage.getItem('attendenceemail'))

     console.log(this.aattendencedata);
   
     this._auth.attendence1(attendence).subscribe(res=>{
      console.log(res);
      this.array2=res;
    
      var jsonObj = JSON.parse( this.array2._body);
      console.log(jsonObj.msg)
      if(jsonObj.msg=="attendence added"){
        Swal.fire('','Attendence Updated','success')
        this._router.navigate(['/homepage'])

      }
      else{
        Swal.fire('','Updated Failed','error')
        this._router.navigate(['/homepage'])
      }
    })
    

    
    

  
  }
}



  ngOnInit() {
    this.http.get('https://hrmsbackend.herokuapp.com/user/getallemployeenames')
    .subscribe(
      (res)=>
      {
        console.log('===>', res)
        this.myArray=res;
        this.myArray=res
        var jsonObj = JSON.parse(this.myArray._body);
        console.log(jsonObj)
        this.myArray=jsonObj.data;
        console.log(this.myArray)
        // this.name = this.myArray[0].name;

        // console.log('res==>', this.name)
        // this.name=res[1].name
        // // this.name2=res[2].name
        // // this.name2=res[3].name
        // console.log( this.name)

      }
    )
  }
//   onSelectionChange(entry) {
//     this.selectedEntry = entry;
// }
  addattendence(){
    const attendence= new FormData()
    // console.log(this.leavedata.holidayType+"type")
    attendence.append('holidaytype',this.leavedata.status)
    console.log(this.leavedata.status)
    this._auth.attendence(attendence).subscribe((res)=>{
      console.log(res)
    })

  }

  sendstatus(selected:any){
    const attendence= new FormData()
    attendence.append('name',selected.firstname)
    attendence.append('email',selected.email)
    attendence.append('name',selected.firstname)
    console.log(selected.firstname)
    console.log(this.attendencestatus+"name is");
    console.log("inside");
    console.log(selected.email)
    console.log(localStorage.getItem('attendencestatus')+"status is")
    localStorage.setItem('attendenceemail',selected.email)
    localStorage.setItem('attendencename',selected.firstname)
    
   
 
     

   



  }
  
}

