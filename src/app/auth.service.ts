import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import {Response} from '@angular/http';
import { Router } from '@angular/router';
import{Headers} from '@angular/http'
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _loginUrl = "http://localhost:3000/Admin/login";
  // private _addemployeeUrl = "http://localhost:3002/user/upload";
  // private _addnoticeUrl = "http://localhost:3002/user/addnotice";
  // private _getleavedataUrl = "http://localhost:3002/user/getleavedata";
  // private _getleaveupdateUrl = "http://localhost:3002/user/leaveupdate";

  // private _getemployeeUrl= "http://localhost:3000/Users/getUsers";
  // private _addholidayUrl="http://localhost:3002/user/addholiday";
  // private _viewholidayUrl="http://localhost:3002/user/viewholiday";
  // private _viewemployeeUrl="http://localhost:3000/Admin/getUsers";
  // private _sendstatusUrl="http://localhost:3000/LeaveRequest/updateStatus";
  // private _sendstatusiproUrl="http://localhost:3002/user/updatestatusiprocurement";
  // private _uploadpayslipsUrl="http://localhost:3002/user/uploadpayslips";
  // private _attendenceUrl="http://localhost:3002/user/attendence";
  
  private _loginUrl = " https://hrmsbackend.herokuapp.com/user/adminlogin";
  private _addemployeeUrl = "https://hrmsbackend.herokuapp.com/user/upload";
  private _addnoticeUrl = " https://hrmsbackend.herokuapp.com/user/addnotice";
  private _getleavedataUrl = " https://hrmsbackend.herokuapp.com/user/getleavedata";
  private _getleaveupdateUrl = "https://hrmsbackend.herokuapp.com/user/leaveupdate";

  private _getemployeeUrl= "https://hrmsbackend.herokuapp.com/Users/getUsers";
  private _addholidayUrl=" https://hrmsbackend.herokuapp.com/user/addholiday";
  private _viewholidayUrl=" https://hrmsbackend.herokuapp.com/user/viewholiday";
  private _viewemployeeUrl="http://localhost:3000/Admin/getUsers";
  private _sendstatusUrl="http://localhost:3000/LeaveRequest/updateStatus";
  private _sendstatusiproUrl=" https://hrmsbackend.herokuapp.com/user/updatestatusiprocurement";
  private _uploadpayslipsUrl=" https://hrmsbackend.herokuapp.com/user/uploadpayslips";
  private _attendenceUrl=" https://hrmsbackend.herokuapp.com/user/attendence";
  private _getiprocurementdataUrl=" https://hrmsbackend.herokuapp.com/user/getiprocurementdata";
  private _adminregisterUrl=" http://localhost:3000/user/admin";


  constructor(private http: HttpClient,private http1:Http,
    private _router: Router) { }

    loginUser(loginUserData){
      return this.http1.post(this._loginUrl, loginUserData)
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
  return this.http1.post(this._addemployeeUrl , empData)


} 
addnotice(noticedata)
{
 console.log('values passing')
  return this.http1.post(this._addnoticeUrl , noticedata)
}
uploadSheet(payload)
{
   
  console.log(payload)
  console.log(this._addemployeeUrl+" url")
  return this.http1.post(this._addemployeeUrl , payload)
}

getemployee()
{
  return this.http.get(this._getemployeeUrl)
    //.map((response:Response)=>response.json( ))

}
addholiday(addholidaydata)
{
  return this.http1.post(this._addholidayUrl ,addholidaydata )
}
viewemployee(viewemployee)
{
  const headers=new HttpHeaders();

  return this.http.post("http://localhost:3000/Admin/getUsers",viewemployee,
  {headers:headers});
}
holidaytype(holidaytype1)
{
  // const headers=new HttpHeaders()
  //  return this.http.post("http://localhost:3002/user/viewholiday",holidaytype1,
  //  {headers:headers})
  return this.http1.post(this._viewholidayUrl ,holidaytype1 )
}

getdetails(getdetails)
{
  var json=JSON.stringify({var1:'test',var2:3
  })
  var params='json='+json;
  var headers=new Headers();
  headers.append('Content-Type','application/x-www-form-urlencoded');
  return this.http.post<any>( 'http://localhost:3000/Admin/getusers',
  params,{

  })
  

}
sendstatus(senddata)
{
  // console.log(senddata)
  // const headers=new HttpHeaders();
  // return this.http.post("http://localhost:3002/user/leaveupdate",senddata,
  // {headers:headers});
  return this.http1.post(this._getleaveupdateUrl , senddata)
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
  return this.http1.post(this._sendstatusiproUrl ,senddata1 )
 
}
uploadpayslips(senddata1)
{
  //console.log(senddata)
  return this.http1.post(this._uploadpayslipsUrl ,senddata1 )

}
leaveappliaction(leavedata)
{

  return this.http1.post(this._getleavedataUrl , leavedata)
}
attendence(leavedata)
{

  return this.http1.post(this._attendenceUrl , leavedata)
}
getiprocurementdata(iprocurementdata)
{

  return this.http1.post(this._getiprocurementdataUrl , iprocurementdata)
}
adminregister(adminregisterdata)
{

  return this.http1.post(this._adminregisterUrl , adminregisterdata)
}
} 

