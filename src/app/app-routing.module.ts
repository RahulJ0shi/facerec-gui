import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {StaffInfoComponent} from './components/staff-info/staff-info.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AppComponent} from './app.component';
import { ReportComponent } from './components/report/report.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DailyReportComponent} from './components/daily-report/daily-report.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'dashboard/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
      {path:'staff',component:StaffInfoComponent},
      {path:'report',component:ReportComponent},
      {path:'daily-report',component:DailyReportComponent},
    ]
  },
  {path:'signup',component:SignUpComponent},
  // {path:'**',redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[HomeComponent,StaffInfoComponent,LoginComponent,SignUpComponent,AppComponent,ReportComponent,DashboardComponent,DailyReportComponent];