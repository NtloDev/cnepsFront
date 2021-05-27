import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {User} from "../Models/user.model";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  current: any ;
  private loggedIn = new BehaviorSubject<boolean>(false);
  // tslint:disable-next-line:typedef
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  private API_URL = environment.apiUrl;
  private currentUserSubject: BehaviorSubject < User > ;
  private helper = new JwtHelperService();
  public currentUser: Observable < User > ;
  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new
    BehaviorSubject < User >(JSON.parse ( localStorage.getItem('currentUser') as string)) ;
    this.currentUser = this.currentUserSubject.asObservable () ;
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    return this.http.post < any >( `${ this.API_URL }/login`, { username,
      password })
      .pipe ( map (user => {
// store user details and jwt token in local storage to keep user
        // logged in between page refreshes
        localStorage.setItem ( 'currentUser', JSON.stringify (user)) ;
        this.currentUserSubject.next (user) ;
        console.log(this.currentUserSubject) ;
        this.current = user ;
        console.log(this.current) ;
        this.loggedIn.next(true);
        return user;
      })) ;
  }
// tslint:disable-next-line:typedef
  logout() {
    this.loggedIn.next(false);
// remove user from local storage and set current user to null
    localStorage.removeItem ( 'currentUser' ) ;
    // @ts-ignore
    this.currentUserSubject.next ( null ) ;
  }
  // tslint:disable-next-line:typedef
  getToken() {
    const use = JSON.parse(localStorage.getItem('currentUser') || '');
    return use;
  }
}
