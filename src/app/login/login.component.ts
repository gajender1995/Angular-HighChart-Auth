import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,user {
  list : any;
  constructor(private authService:AuthService) { }

  username : string;
  password : string;
  model = {
    username : null,
    password : null
  }

  ngOnInit() {
    console.log("Login");
  }

  onSubmit(heroForm) { debugger; 
  if(heroForm.username == 'demo' && heroForm.password == 'demo'){
  this.authService.setLogin(true); alert("Success")}
  else{
  this.authService.setLogin(false);
  }
  }

}

interface user {
  username : string,
  password : string
}
