import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  //Implement API log in connection.

  userIsLoggedIn():boolean{
    //TODO
    return false
  }

  getUserName():string{
    //TOOD
    return "username"
  }

  logIn(username:string,password:string):Boolean{
    //TODO
    return true
  }

  logOut():void{
    //TODO
  }
}
