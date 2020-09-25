import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AttendanceComponent } from './components/home/attendance/attendance.component';
import {HttpClientModule} from '@angular/common/http';
import {StaffDataService} from './staff-data.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    AttendanceComponent,
    routingComponents,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [StaffDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
