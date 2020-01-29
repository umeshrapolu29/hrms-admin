import { Routes } from '@angular/router';





import { IconsComponent } from '../../icons/icons.component';

import { ViewdetailsComponent } from '../../viewdetails/viewdetails.component';
import { AddEmployeeComponent } from 'app/add-employee/add-employee.component';
import { HolidayComponent } from 'app/holiday/holiday.component';
import { LeaverequestComponent } from 'app/leaverequest/leaverequest.component';
import {UploadpayslipsComponent } from 'app/uploadpayslips/uploadpayslips.component';
import { from } from 'rxjs';
import { NoticeboardComponent } from 'app/noticeboard/noticeboard.component';
import { IprocurementComponent } from 'app/iprocurement/iprocurement.component';
import { AttendenceComponent } from 'app/attendence/attendence.component';
import { AddnoticeComponent } from 'app/addnotice/addnotice.component';
import { ViewnoticeComponent } from 'app/viewnotice/viewnotice.component';
import { AddiprocurementComponent } from 'app/addiprocurement/addiprocurement.component';
import { MarkattendanceComponent } from 'app/markattendance/markattendance.component';
import { ViewattendanceComponent } from 'app/viewattendance/viewattendance.component';
import { AuthGuard } from 'app/auth.guard';
import { AddholidayComponent } from 'app/addholiday/addholiday.component';
import { FileuploadComponent } from 'app/fileupload/fileupload.component';
import { ViewemployeelistComponent } from 'app/viewemployeelist/viewemployeelist.component';
import { DetailsComponent } from 'app/details/details.component';
import { HomepageComponent } from 'app/homepage/homepage.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
   

 
    { path: 'icons',          component: IconsComponent },


    {path:'viewdetails', component:ViewdetailsComponent},
    {path:'AddEmployee', component:AddEmployeeComponent},
    {path:'holiday',component:HolidayComponent},
    {path:'leaverequest',component:LeaverequestComponent},
    {path:'uploadpayslips',component:UploadpayslipsComponent},
    {path:'noticeboard',component:NoticeboardComponent},
    {path:'iprocurement',component:IprocurementComponent},
    {path:'attendence',component:AttendenceComponent},
    {path:'addnotice',component:AddnoticeComponent,canActivate:[AuthGuard]},    
    {path:'viewnotice',component:ViewnoticeComponent},
    {path:'addiprocurement',component:AddiprocurementComponent},
    {path:'markattendance',component:MarkattendanceComponent},
    {path:'viewattendance',component:ViewattendanceComponent},
    {path:'addholiday',component:AddholidayComponent},
    {path:'fileupload',component:FileuploadComponent},
    {path:'viewemployeelist',component:ViewemployeelistComponent},
    {path:'details',component:DetailsComponent},
    {path:'homepage',component:HomepageComponent},
  
];
