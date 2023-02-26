import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login.service';
import { LogoutService } from 'app/logout.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(private login:LoginService , private logout :LogoutService) { }
   Logout(){
     this.logout.logout();
   }
  ngOnInit() {
  }

}
