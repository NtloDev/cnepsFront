import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {first} from "rxjs/operators";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // @ts-ignore
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue ) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    // console.log(this.use),
    this.authService.login (this.f.username.value,
      this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          const use = this.getToken();
          this.router.navigateByUrl('/SampleComponent', { skipLocationChange: true });
          this.router.navigate(['NavbarComponent']);
          const token = this.getDecodedAccessToken(use['token']);
          // tslint:disable-next-line:triple-equals
          if (token['roles'] == 'ROLE_Directeur'){
            this.router.navigate(['/app-home-director']);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_Secretaire'){
            this.router.navigate(['/app-home-secretaire']);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_Admin'){
            this.router.navigate(['/app-home-administrateur']);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_EtudesEtInnovations'){
            this.router.navigate(['/app-home-etudes-et-innovations']);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_SurveillantGestionnaire'){
            this.router.navigate(['/app-home-surveillant-general']);
          }
        },
        error => {
          // @ts-ignore
          // this.alertService.error(error);
          this.loading = false;
        });
  }
  getDecodedAccessToken(token: any): any {
    try{
      return jwt_decode(token);
    }
    catch (Error){
      return null;
    }
  }
  // tslint:disable-next-line:typedef
  getToken() {
    const use = JSON.parse(localStorage.getItem('currentUser') || '');
    return use;
  }
}
