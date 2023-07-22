import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private r:Router, public rs:RegistrationService) { }

  logout()
  {
    this.rs.logout();
    this.r.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
