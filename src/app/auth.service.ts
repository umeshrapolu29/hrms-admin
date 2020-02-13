import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http';
import { Router } from '@angular/router';
import{Headers} from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "https://zyclyx-app.herokuapp.com/TestAdmin/login";
  private _addemployeeUrl = "https://zyclyx-app.herokuapp.com/TestAdmin/uploads";
  private _addnoticeUrl = "https://zyclyx-app.herokuapp.com/NoticeBoard/AddNotice";

  private _getemployeeUrl= "https://zyclyx-app.herokuapp.com/Users/getUsers";
  private _addholidayUrl="https://zyclyx-app.herokuapp.com/Holiday/AddHoliday";
  private _viewemployeeUrl="https://zyclyx-app.herokuapp.com/TestAdmin/getUsers";
  private _sendstatusUrl="https://zyclyx-app.herokuapp.com/LeaveRequest/updateStatus";

  constructor(private http: HttpClient,
    private _router: Router) { }

    loginUser(loginUserData){
      return this.http.post<any>(this._loginUrl, loginUserData)
    }
    getToken() {
      return localStorage.getItem('token')
    }
    loggedIn() {
      return !!localStorage.getItem('token')    
    }
    
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/signin'])
  }
addemployee(empData)
{
  console.log(empData)
  console.log(this._addemployeeUrl+" url")
  return this.http.post<any>(this._addemployeeUrl , empData)


} 
addnotice(noticedata)
{
 console.log('values passing')
  return this.http.post<any>(this._addnoticeUrl , noticedata)
}
uploadSheet(payload)
{
  // return this.http.post<any>(this._uploadUrl, upload)
  const headers=new HttpHeaders();

  return this.http.post("https://zyclyx-app.herokuapp.com/TestAdmin/uploads",payload,
  {headers:headers});
}

getemployee()
{
  return this.http.get(this._getemployeeUrl)
    //.map((response:Response)=>response.json( ))

}
addholiday(addholidaydata)
{
  return this.http.post<any>(this._addholidayUrl ,addholidaydata )
}
viewemployee(viewemployee)
{
  const headers=new HttpHeaders();

  return this.http.post("https://zyclyx-app.herokuapp.com/TestAdmin/getUsers",viewemployee,
  {headers:headers});
}
holidaytype(holidaytype1)
{
  const headers=new HttpHeaders()
   return this.http.post("https://zyclyx-app.herokuapp.com/Holiday/ViewHoliday",holidaytype1,
   {headers:headers})
}

getdetails(getdetails)
{
  var json=JSON.stringify({var1:'test',var2:3
  })
  var params='json='+json;
  var headers=new Headers();
  headers.append('Content-Type','application/x-www-form-urlencoded');
  return this.http.post<any>( 'https://zyclyx-app.herokuapp.com/TestAdmin/getusers',
  params,{

  })
  

}
sendstatus(senddata)
{
  console.log(senddata)
  const headers=new HttpHeaders();
  return this.http.post("https://zyclyx-app.herokuapp.com/LeaveRequest/updateStatus",senddata,
  {headers:headers});
}
searchid(searchid)
{
  const headers=new HttpHeaders()

  return this.http.post("https://zyclyx-app.herokuapp.com/IProcurement/getSearch",searchid,
  {headers:headers});
}
searchname(sendname)
{
 
  const headers=new HttpHeaders();
  return this.http.post("https://zyclyx-app.herokuapp.com/IProcurement/getSearch",sendname,
  {headers:headers});

}
viewemployee1(viewemployee)
{
  const headers=new HttpHeaders();

  return this.http.post("https://zyclyx-app.herokuapp.com/IProcurement/getSearch",viewemployee,
  {headers:headers});
}
sendstatusipro(senddata1)
{
  //console.log(senddata)
  const headers=new HttpHeaders();
  return this.http.post("https://zyclyx-app.herokuapp.com/IProcurement/adminUpdate",senddata1,
  {headers:headers});
}
uploadpayslips(senddata1)
{
  //console.log(senddata)
  const headers=new HttpHeaders();
  return this.http.post("https://zyclyx-app.herokuapp.com/Payslips/request",senddata1,
  {headers:headers});
}
leaveappliaction(leavedata)
{
  const headers=new HttpHeaders()
   return this.http.post("https://zyclyx-app.herokuapp.com/LeaveRequest/getLeaveData",leavedata,
   {
     headers:headers
   })
}
} 

