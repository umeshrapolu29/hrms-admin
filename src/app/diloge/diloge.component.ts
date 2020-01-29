import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-diloge',
  templateUrl: './diloge.component.html',
  styleUrls: ['./diloge.component.scss']
})
export class DilogeComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router,private _snackBar: MatSnackBar,public dialog: MatDialog) { }
    openSnackBar() {      
       this._snackBar.open("Delete Successfully !!", "", { 
        duration: 2000,
        });  
        
    }

  ngOnInit() {
  }

}
