import { Component, NgModule} from '@angular/core';
import { AuthService } from './auth.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _authService: AuthService){}

}
