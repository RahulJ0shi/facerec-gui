import { Component, OnInit } from "@angular/core";
import { StaffDataService } from "src/app/staff-data.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user: any;
  pass: any;
  msg: any;
  login: any;
  constructor(
    private formBuilder: FormBuilder,
    private logins: StaffDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [""],
      password: [""],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.user = this.loginForm.value.username;
    this.pass = this.loginForm.value.password;

    this.logins.Login(this.user, this.pass).subscribe((data: any) => {
      localStorage.setItem("access", data);
      this.router.navigate(["dashboard/home"]);
    });
  }
}
