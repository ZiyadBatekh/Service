import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login.service';
import { LogoutService } from 'app/logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private login:LoginService , private logout:LogoutService) {
    
   }
   // Google LogIn 
   googleLogin(){
    this.login.googleLogin();
   }


}
