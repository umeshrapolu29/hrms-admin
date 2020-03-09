import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
    console.log("he;lo")
    this.http.get('https://hrmsbackend.herokuapp.com/user/viewnotice'
    )
    .subscribe(
      (res)=>{
        
       console.log(res)
  
      })
  }

}
