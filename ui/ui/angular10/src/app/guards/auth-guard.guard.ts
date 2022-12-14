import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
     
        // check if route is restricted by role
        // if (route.data.roles && route.data.roles.indexOf(currentUser.Role) === -1) {
        //     // role not authorised so redirect to home page
        //     this.router.navigate(['/']);
        //     return false;
        // }

        // authorised so return true
        return true;
    }
    console.log('fkjnfdn')
    return true;
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    
}    
  
}
