import { Router ,CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './login/auth.service';

@Injectable({
providedIn : 'root'
})
export class AuthGuard implements CanActivate {
    isLogin : boolean;
    constructor(private router : Router , private authService : AuthService) { }

    canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot ){
        this.isLogin = this.authService.checkLogin();
        if(!this.isLogin){
            this.router.navigate(['/login'], { queryParams : {  returnUrl : state.url} })
            return false;
        }
        return true;
        
    }

}