import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';


@Injectable(
)
export class AuthGuard implements CanActivate   {
  constructor(private _authService: AuthService,
    private _router: Router) { }

    canActivate(): boolean {
      if (this._authService.loggedIn()) {
        console.log('true')
        return true
      } else {
        console.log('false')            
        this._router.navigate(['/signin'])
        return false
      }
    }


  
}
