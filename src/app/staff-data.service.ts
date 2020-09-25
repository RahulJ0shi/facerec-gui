import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {staffAttendance,todaytime,staffInfo,report} from './dataFormat';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StaffDataService {

  constructor(private httpClient :HttpClient) { }

  public StaffAttendance():Observable<staffAttendance[]>{
    return this.httpClient.get<staffAttendance[]>('http://7ce4b5e6.ngrok.io/today');
  }

  public LateArrivals():Observable<todaytime[]>{
    return this.httpClient.get<todaytime[]>('http://7ce4b5e6.ngrok.io/late');
  }
  
  public EarlyDeparture():Observable<todaytime[]>{
    return this.httpClient.get<todaytime[]>('http://7ce4b5e6.ngrok.io/early');
  }

  public halfDay():Observable<todaytime[]>{
    return this.httpClient.get<todaytime[]>('http://7ce4b5e6.ngrok.io/halfday');
  }    

  public StaffInfo():Observable<staffInfo[]>{
    return this.httpClient.get<staffInfo[]>('http://7ce4b5e6.ngrok.io/usersdetails');
  }  

  public monthlyReport(month:string):Observable<report[]>{
    var m=month.split('-',2);
    // return this.httpClient.get<report[]>('http://7ce4b5e6.ngrok.io/monthwise/'+m[1]+'/'+m[0]);     //use yr link
    return this.httpClient.get<report[]>('http://localhost:3200/staffInfo');
  }  

  // public lateReport():Observable<report[]>{
  //   return this.httpClient.get<report[]>('http://7ce4b5e6.ngrok.io/report');
  // }   

  public Login(username:string,password:string){
    return this.httpClient.get('http://localhost:5000/auth/'+username+"/"+password);
  }  

}
