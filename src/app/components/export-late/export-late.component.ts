import { Component, OnInit } from '@angular/core';
import {StaffDataService} from 'src/app/staff-data.service';

@Component({
  selector: 'app-export-late',
  templateUrl: './export-late.component.html',
  styleUrls: ['./export-late.component.css']
})
export class ExportLateComponent implements OnInit {


  public userData=[];
  public searchResult=[];
  public staffInfo=[];
  public monthlyReport=[];
  public Departments=[{branch:'computer'},{branch:'mechanical'},{branch:'electrical'},{branch:'civil'},{branch:'e&tc'},{branch:'mca'},{branch:'other'}];
  
  d= new Date(2019,11, 0).getDate();
  dc=Array(this.d).fill(0).map((x,i)=>i);

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
    // this.staffDataService.monthlyReport()
    // .subscribe(data=>this.userData=data);

    // this.staffDataService.StaffInfo()
    // .subscribe(data=>this.staffInfo=data);
    

  }

  private initReport(){
    this.monthlyReport=[]
    for(let i=0;i<this.staffInfo.length;i++){
      this.monthlyReport[i+1]={"id":Number,"name":String,"branch":String,"flag":[this.d]}
      for(let j=0;j<=this.d ;j++){
        this.monthlyReport[i+1].flag[j]='-'
      }
    }
    for(let i=0;i<this.staffInfo.length;i++){
      this.monthlyReport[i+1].id=this.staffInfo[i].id;
      this.monthlyReport[i+1].name=this.staffInfo[i].name;
      this.monthlyReport[i+1].branch=this.staffInfo[i].branch;     
    }

  }

  public filterByDept(Dept:string){

    this.makeReport()
    for (let i=0;i<this.monthlyReport.length-1;i++){
      var j=i+1;
      if (this.monthlyReport[j].branch==Dept)
        this.searchResult.push(this.monthlyReport[j])
      else if(Dept==undefined){
        this.searchResult.push(this.monthlyReport[j])}
    }
    return this.searchResult;
  }

  public makeReport(){

    this.searchResult=[];
    this.initReport()

    for (let i=1;i<this.monthlyReport.length;i++){
      for(let j=0;j<this.userData.length;j++){
        if(this.monthlyReport[i].id==this.userData[j].id){          
          var split=this.userData[j].date.split('-',3)
          if(this.userData[j].flag==0)
            this.monthlyReport[i].flag[split[2]]='A'
          else if(this.userData[j].flag==2)
            this.monthlyReport[i].flag[split[2]]='P'
        }
      }
    }    

  }

  downloadCSV(){               // Incomplete
    var report=[];
    report=[]
    for(let i=0;i<this.searchResult.length;i++){
      report[i]={"id":Number,"name":String,"branch":String,"flag":[this.searchResult[1].flag.length]}
    }
    console.log(report)
    console.log(this.searchResult)
    for(let i=1;i<this.searchResult.length;i++){
      report[i].id=this.searchResult[i+1].id;
      report[i].name=this.searchResult[i+1].name;
      report[i].branch=this.searchResult[i+1].branch;  
      report[i].flag=this.searchResult[i+1].flag;
    }
    // new  AngularCsv(this.userData, "searchResult", this.csvOptions);
  }
 
 public report(){
 }

}
