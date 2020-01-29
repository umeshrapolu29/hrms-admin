import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';



;
import { IconsComponent } from '../../icons/icons.component';



import { ViewdetailsComponent } from '../../viewdetails/viewdetails.component';
import { AddEmployeeComponent} from '../../add-employee/add-employee.component';
import { HolidayComponent} from '../../holiday/holiday.component';
import{LeaverequestComponent} from '../../leaverequest/leaverequest.component';
import{UploadpayslipsComponent } from '../../uploadpayslips/uploadpayslips.component';
import{NoticeboardComponent} from '../../noticeboard/noticeboard.component';
import{IprocurementComponent} from '../../iprocurement/iprocurement.component';
import{AttendenceComponent } from '../../attendence/attendence.component';
import{AddnoticeComponent} from '../../addnotice/addnotice.component';
import{ViewnoticeComponent} from '../../viewnotice/viewnotice.component';
import{AddiprocurementComponent} from '../../addiprocurement/addiprocurement.component';
import{ MarkattendanceComponent} from '../../markattendance/markattendance.component';
import{ViewattendanceComponent} from '../../viewattendance/viewattendance.component';
import{AddholidayComponent} from '../../addholiday/addholiday.component';
import{FileuploadComponent} from '../../fileupload/fileupload.component';
import{ ViewemployeelistComponent} from '../../viewemployeelist/viewemployeelist.component';
import{DetailsComponent} from '../../details/details.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { from } from 'rxjs';
import { HomepageComponent } from 'app/homepage/homepage.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
  ],
  declarations: [
 
   
  
    
    IconsComponent,
    
  
 
    ViewdetailsComponent,
    AddEmployeeComponent,
    HolidayComponent,
    LeaverequestComponent,
    UploadpayslipsComponent,
    NoticeboardComponent,
    IprocurementComponent,
    AttendenceComponent ,
    AddnoticeComponent,
    ViewnoticeComponent,
    AddiprocurementComponent,
    MarkattendanceComponent,
    ViewattendanceComponent,
    AddholidayComponent,
    FileuploadComponent,
    ViewemployeelistComponent,
    DetailsComponent,
    HomepageComponent,
  ]
})

export class AdminLayoutModule {}
