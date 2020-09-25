import { Component, OnInit } from '@angular/core';
import {StaffDataService} from 'src/app/staff-data.service';


@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css']
})
export class StaffInfoComponent implements OnInit {

  public userData=[];
  public searchResult=[];
  public Departments=[{branch:'Administration'},{branch:'Computer'},{branch:'Mechanical'},{branch:'Electrical'},{branch:'Civil'},{branch:'E&TC'},{branch:'MCA'},{branch:'Science'}];

  constructor(private saffDataService: StaffDataService) { }

  ngOnInit() {
    this.saffDataService.StaffInfo()
    .subscribe(data=>this.userData=data);

    this.saffDataService.StaffInfo()
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
