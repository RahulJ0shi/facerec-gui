import { Component, OnInit } from '@angular/core';
import {StaffDataService} from 'src/app/staff-data.service'
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  public userData=[];
  public searchResult=[];
  
  public errorMsg;
  public Departments=[{branch:'Administration'},{branch:'Computer'},{branch:'Mechanical'},{branch:'Electrical'},{branch:'Civil'},{branch:'E&TC'},{branch:'MCA'},{branch:'Science'}];
  
  constructor(private saffDataService: StaffDataService) {
  }

  ngOnInit() {
    this.saffDataService.StaffAttendance()
    .subscribe(data=>this.userData=data,
      error=>this.errorMsg="Database Server Not Found");
    
    this.saffDataService.StaffAttendance()
    .subscribe(data=>this.searchResult=data);
    
  }

  public filterBybranch(branch:string){
    this.searchResult=[];
    for (let x of this.userData){
      if(x.branch==branch)
      this.searchResult.push(x)
      else if(branch==undefined)
      this.searchResult.push(x)
    }
    return this.searchResult;
  }

}
