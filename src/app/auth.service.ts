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
  private _loginUrl = "http://localhost:3000/admin/login";
  private _addemployeeUrl = "http://localhost:3000/admin/uploads";
  private _addnoticeUrl = "http://localhost:3000/NoticeBoard/AddNotice";

  private _getemployeeUrl= "http://localhost:3000/Users/getUsers";
  private _addholidayUrl="http://localhost:3000/Holiday/AddHoliday";
  private _viewemployeeUrl="http://localhost:3000/admin/getUsers";
  private _sendstatusUrl="http://localhost:3000/LeaveRequest/updateStatus";

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

  return this.http.post("http://localhost:3000/admin/uploads",payload,
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

  return this.http.post("http://localhost:3000/admin/getUsers",viewemployee,
  {headers:headers});
}
holidaytype(holidaytype1)
{
  const headers=new HttpHeaders()
   return this.http.post("http://localhost:3000/Holiday/ViewHoliday",holidaytype1,
   {headers:headers})
}

getdetails(getdetails)
{
  var json=JSON.stringify({var1:'test',var2:3
  })
  var params='json='+json;
  var headers=new Headers();
  headers.append('Content-Type','application/x-www-form-urlencoded');
  return this.http.post<any>( 'http://localhost:3000/admin/getusers',
  params,{

  })
  

}
sendstatus(senddata)
{
  console.log(senddata)
  const headers=new HttpHeaders();
  return this.http.post("http://localhost:3000/LeaveRequest/updateStatus",senddata,
  {headers:headers});
}
searchid(searchid)
{
  const headers=new HttpHeaders()

  return this.http.post("http://localhost:3000/IProcurement/getSearch",searchid,
  {headers:headers});
}
searchname(sendname)
{
 
  const headers=new HttpHeaders();
  return this.http.post("http://localhost:3000/IProcurement/getSearch",sendname,
  {headers:headers});

}
viewemployee1(viewemployee)
{
  const headers=new HttpHeaders();

  return this.http.post("http://localhost:3000/IProcurement/getSearch",viewemployee,
  {headers:headers});
}
sendstatusipro(senddata1)
{
  //console.log(senddata)
  const headers=new HttpHeaders();
  return this.http.post("http://localhost:3000/IProcurement/adminUpdate",senddata1,
  {headers:headers});
}
uploadpayslips(senddata1)
{
  //console.log(senddata)
  const headers=new HttpHeaders();
  return this.http.post("http://localhost:3000/Payslips/request",senddata1,
  {headers:headers});
}
leaveappliaction(leavedata)
{
  const headers=new HttpHeaders()
   return this.http.post("http://localhost:3000/LeaveRequest/getLeaveData",leavedata,
   {
     headers:headers
   })
}
} 

