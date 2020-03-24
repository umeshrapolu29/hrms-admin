import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,Pipe } from '@angular/core';
// import { FileSelectDirective, FileDropDirective, FileUploadModule,FileUploader  } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
// import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';





import { IconsComponent } from './icons/icons.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule, MatNativeDateModule, MatMenuModule, MatRadioModule, MatCardModule, MatSelectModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { DilogeComponent } from './diloge/diloge.component';
import {NgxPaginationModule} from 'ngx-pagination';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { FilterPipe } from './employees/employee-filter.pipe';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
  
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule ,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatMenuModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    
    CommonModule,
    FileUploadModule,
    NgxPaginationModule,
    MatCardModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatSnackBarModule,
    
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SigninComponent,
    DilogeComponent,
    FilterPipe,
    ForgetpasswordComponent,
    AdminregistrationComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
 
    // FileSelectDirective,
    // FileDropDirective    
   ],
   entryComponents:
   [
     DilogeComponent,
   ],
  providers: [AuthGuard,AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  exports: [
    // FileSelectDirective,
    // FileDropDirective,FileUploader
    ]
})
export class AppModule { }
