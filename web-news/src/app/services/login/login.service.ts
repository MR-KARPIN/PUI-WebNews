import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import User from 'src/app/Interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private user: User = {username:"",password:""};

  private loginUrl = 'http://sanger.dia.fi.upm.es/pui-rest-news/login';

  private message: string = "";

  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { }

  isLogged() {
    return this.user.username != "";
  }

  login(name: string, pwd: string): Observable<User> {
    console.log("login start")
    const usereq = new HttpParams()
      .set('username', name)
      .set('passwd', pwd);

      console.log("params set")

      console.log(this.http.post<User>(this.loginUrl, usereq).pipe(
        tap(user => {
          this.user = user;
        })
      ))
  
    return this.http.post<User>(this.loginUrl, usereq).pipe(
      tap(user => {
        this.user = user;
      })
    );

    
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.user = {username:"",password:""};
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.user = {username:"",password:""};
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
