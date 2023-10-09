import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  submit(): void {
    this.loginService.login(this.username, this.password).subscribe({
      next: user => {
        if (user) {
          this.isLoggedIn = true;
          this.loginError = false;
        }
      },
      error: error => {
        console.error(error);
        this.loginError = true;
        this.isLoggedIn = false;
      }
    });
  }

  logOut ():void{
    this.loginService.logout()
    this.isLoggedIn = false;
  }

  


  
  
}
