import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './signin/signin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'sidebar',
    pathMatch: 'full',
  },
  {path:'signin',component:SigninComponent},
  {path:'registration',component:AdminregistrationComponent},
  {path:'forgotpassword',component:ForgetpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

