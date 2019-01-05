import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email = '';
  password = '';

  authenticationFailed = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {

  }
  signIn() {
    this.authenticationFailed = false;
    this.authService.loginWithEmail(this.email, this.password).then(user => this.router.navigate(['adminHome']),
      error => {
      this.authenticationFailed = true;
        alert(error);
      }
    );
  }

  loginWithGoogle() {
    this.authenticationFailed = false;
    this.authService.loginWithGoogle().then(user => this.router.navigate(['adminHome']),
    () => this.authenticationFailed = true);
  }
}
