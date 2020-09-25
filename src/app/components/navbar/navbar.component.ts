import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public Departments=[{dept:'computer'},{dept:'mechanical'},{dept:'electrical'},{dept:'civil'},{dept:'e&tc'},{dept:'mca'},{dept:'other'}];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem("access","failed")
    this.router.navigate(['login'])
  }

}
