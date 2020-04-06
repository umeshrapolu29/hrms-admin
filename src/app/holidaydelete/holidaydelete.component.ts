import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-holidaydelete',
  templateUrl: './holidaydelete.component.html',
  styleUrls: ['./holidaydelete.component.scss']
})
export class HolidaydeleteComponent implements OnInit {

  array:any;

  constructor(private _auth: AuthService,
    private _router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog) { }
  openSnackBar() {      
    const viewemployee1  = new FormData();
    viewemployee1.append('id',localStorage.getItem('deletedholidayid'));
     this._auth.deleteholiday(viewemployee1).subscribe((res)=>{
 console.log(res);
 this.array=res;
 var jsonObj = JSON.parse(this.array._body);
     console.log(jsonObj.msg)

   if(jsonObj.msg=="delete holiday")
   {
     Swal.fire('','deleted Successful','success')
     this._router.navigate(['/homepage'])
   }
   else{
     Swal.fire('','uploaded failed','error')
   }
})
      
  }

  ngOnInit() {
  }

}
