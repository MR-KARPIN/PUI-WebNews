import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import User from 'src/app/Interfaces/User';
import { NewsService } from '../news/news.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private user: User = {authorization: "",
    apikey: "",
    expires: "",
    group: "",
    user: "",
    username: ""};

  private loginUrl = 'http://sanger.dia.fi.upm.es/pui-rest-news/login';

  private message: string = "";

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  

  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'x-www-form-urlencoded')
  };

  constructor(private http: HttpClient, private newsService:NewsService) { 
    
  }

  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  isLogged() {
    return this.user.username != "";
  }

  login(name: string, pwd: string): Observable<User> {
    
    
    const usereq = new HttpParams()
      .set('username', name)
      .set('passwd', pwd);


    return this.http.post<User>(this.loginUrl, usereq).pipe(
      tap(user => {
        this.user = user;
        this.isLoggedInSubject.next(true)
        
        this.newsService.setUserApiKey(user.apikey)
      })
    );

    
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.user = {authorization: "", apikey: "",
    expires: "",
    group: "",
    user: "",
    username: ""};

    this.newsService.setAnonymousApiKey();
    this.isLoggedInSubject.next(false);
    
    
  }

 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.user = {authorization: "",
      apikey: "",
      expires: "",
      group: "",
      user: "",
      username: ""};
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
