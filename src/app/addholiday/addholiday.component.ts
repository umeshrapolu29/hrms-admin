import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addholiday',
  templateUrl: './addholiday.component.html',
  styleUrls: ['./addholiday.component.scss']
})
export class AddholidayComponent implements OnInit {
  addholidaydata={  token: localStorage.getItem('token') }

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $(".bt").on('click', function(){
        $(".cover").show();
        $(".pop").show();
        
      });
      $("#close").on('click', function(){
        $(".cover").hide();
        $(".pop").hide();
        
      });
    });
    var html = '<tr><td><input type="text" name="name"></td><td><input type="date" name="date"></td><td><button class="remove">-</button></td></tr>';
 
$(function() {
   
 
    $('#addRow').click(function(){
        $('tbody').append(html);
    });
 
    $(document).on('click', '.remove', function() {
        $(this).parents('tr').remove();
    });
 
   
});
  }
  addholiday()
  {
    console.log(this.addholidaydata)
    this._auth.addholiday(this.addholidaydata)
    .subscribe(
      res => {
         console.log(res)
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
