import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User;


  constructor( private r: Router, private rs: RegistrationService) 
  {
    this.user=new User;
   }

  ngOnInit(): void {
  }
        
  onSubmit() {
    if (this.user.role == "Customer") {
      // this.rs.logIn(this.user).subscribe(result => this.gotoUserList() , error=>alert("Invalid Credentials"));
      this.rs.logIn(this.user).subscribe(result =>{console.log(result); this.gotoUserList()}, error=>alert("Invalid Credentials"));
    }
    else {
      this.rs.logIn(this.user).subscribe(result => this.gotoAdminpage(), error=>alert("Invalid Credentials"));
    }
  }

  gotoUserList() {
    this.rs.logged = true
    this.r.navigateByUrl("/homepage");
  }
  gotoAdminpage() {
    this.rs.logged = true
    this.r.navigateByUrl("/edit-furniture")
  }
}

