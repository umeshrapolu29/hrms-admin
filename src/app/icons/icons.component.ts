import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {


  constructor(private httpClient:HttpClient){  }

  ngOnInit() {
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`)
    .subscribe(
      (data:any[]) => {
      console.log(data)
      
         
    }
    )
  }
}



