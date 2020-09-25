import { Component, OnInit } from '@angular/core';
import {StaffDataService} from 'src/app/staff-data.service';
import { $ } from 'protractor';
// import {AngularCsv} from 'angular7-csv/dist/Angular-csv';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public userData=[];
  public searchResult=[];
  public Report=[];
  public monthlyReport=[];
  public Departments=[{branch:'Administration'},{branch:'Computer'},{branch:'Mechanical'},{branch:'Electrical'},{branch:'Civil'},{branch:'E&TC'},{branch:'MCA'},{branch:'Science'}];
  
  d= new Date(2020,1, 0).getDate();
  dc=Array(this.d).fill(0).map((x,i)=>i);
  m = new Date().getMonth().toString() + 1;
  y = new Date().getFullYear().toString();
  cmonth=this.m + '-' + this.y;

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'REPORT MONTH :',
    useBom: true,
    noDownload: false,
    headers: ["ID","NAME","DEPARTMENT","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
  };


  constructor(private staffDataService: StaffDataService) {
   }

  ngOnInit() {
    this.staffDataService.monthlyReport(this.cmonth)
    .subscribe(data=>this.userData=data);

    this.staffDataService.monthlyReport(this.cmonth)
    .subscribe(data=>this.searchResult=data);    
  }


  public filterByDept(branch:string,Month:any){
    this.staffDataService.monthlyReport(Month)
    .subscribe(data=>this.userData=data);

    this.searchResult=[];
    for (let x of this.userData){
      if(x.branch==branch)
      this.searchResult.push(x)
      else if(branch==undefined)
      this.searchResult.push(x)
    }
    return this.searchResult;
  }


  downloadCSV(){
    console.log(this.searchResult)
    // for(let i=)
    // console.log(this.Report)
    // new  AngularCsv(this.userData, "searchResult", this.csvOptions);
  }
 
 public report(){
 }

}