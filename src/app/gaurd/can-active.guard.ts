import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../service/registration.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {

  constructor(private rs:RegistrationService,private r:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if(this.rs.logged)
    { return true;}
    else
    {
      this.r.navigateByUrl("/login")
      return false;
    }


  }
  
}
