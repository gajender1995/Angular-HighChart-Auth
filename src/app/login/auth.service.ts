import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    isLogin : boolean;
    constructor(private router : Router){
        console.log("AuthService");
        this.isLogin = false;
    }
    checkLogin(){
        return this.isLogin;
    };

    setLogin(value){
        this.isLogin = value;
        this.router.navigate(['/']);
        
    }

}