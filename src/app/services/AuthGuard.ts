import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
              this.router.navigate(['/auth', 'adminHome']);
            } else {
              this.router.navigate(['/auth', 'sign-in']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
