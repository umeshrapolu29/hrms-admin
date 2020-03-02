import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  timer;
  time=new Date();

  ngOnInit() {
    this.timer=setInterval(()=>{
      this.time=new Date();
    },1000);
  }

}
