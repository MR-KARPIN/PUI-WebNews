import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  
  username:string  = "";
  password:string  ="";
  isLoggedIn:boolean = false;
  loginError:boolean = false;

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    if(this.loginService.isLogged()){
      this.username = this.loginService.getUser()?.username
      this.isLoggedIn = true
    }
  }

  submit ():void{
    if(!this.loginService.login(this.username,this.password)){}
      this.loginError = true;
  }

  logOut ():void{
    this.loginService.logout()
  }
  


  
  
}
