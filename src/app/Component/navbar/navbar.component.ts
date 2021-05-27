import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  isLoggedIn$ = this.authService.isLoggedIn; // Observable<boolean>;
  // @ts-ignore
  showMe: boolean;
  // @ts-ignore
  showMe2: boolean;
  // @ts-ignore
  showMeProfil: boolean;
  // @ts-ignore
  showAllUsers: boolean;
  // @ts-ignore
  showOneUsers: boolean;
  // @ts-ignore
  public logged = true ;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.refreshLoggedIn();
    this.showMefunction();
  //  this.showMe2function();
    this.showMeProfilfunction();
    this.showAllUsersFunction();
    this.showOneUsersFunction();
  }
// tslint:disable-next-line:typedef
  showMefunction(){
    console.log(this.showMe);
    this.showMe = !this.showMe;
  }
  // tslint:disable-next-line:typedef
  refreshLoggedIn() {
    // tslint:disable-next-line:triple-equals
    const use = this.authService.getToken();
    console.log(use);
    if (use !== null){
      console.log(this.isLoggedIn$) ;
      this.isLoggedIn$ = new BehaviorSubject<boolean>(true);
    }
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.isLoggedIn$ =  this.authService.isLoggedIn;
    this.authService.logout();
    this.router.navigate(['']);
  }
// @ts-ignore
  // tslint:disable-next-line:typedef
 /* showMe2function(){
    console.log('ca marche');
    this.homeComponent.showMe2 = !this.homeComponent.showMe2;
  }*/
// @ts-ignore
  // tslint:disable-next-line:typedef
  showMeProfilfunction(){
    this.showMeProfil = !this.showMeProfil;
  }
  // tslint:disable-next-line:typedef
  showAllUsersFunction(){
    this.showAllUsers = !this.showAllUsers;
  }
  // tslint:disable-next-line:typedef
  showOneUsersFunction(){
    this.showOneUsers = !this.showOneUsers;
  }
}
