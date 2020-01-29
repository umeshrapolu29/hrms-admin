import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Add Employee',  icon: 'speedometer', class: '' },
    { path: '/user-profile', title: 'View Employee Details',  icon:'person', class: '' },
    { path: '/table-list', title: 'View Holidays',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Leave Request',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Notice Board',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Iprocurement',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Attendence',  icon:'notifications', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logoutUser(){
    localStorage.removeItem('token')
this._router.navigate(['/signin'])
}

}
