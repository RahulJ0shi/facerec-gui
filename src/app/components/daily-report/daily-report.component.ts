import { Component, OnInit } from '@angular/core';
import {StaffDataService} from 'src/app/staff-data.service';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  public halfDay=[];
  public lateArrive=[];
  public earlyDepart=[];
  
  constructor(private staffDataService: StaffDataService) { }

  ngOnInit() {
    this.staffDataService.halfDay()
    .subscribe(data=>this.halfDay=data);

    this.staffDataService.EarlyDeparture()
    .subscribe(data=>this.earlyDepart=data);

    this.staffDataService.LateArrivals()
    .subscribe(data=>this.lateArrive=data);
}
}
