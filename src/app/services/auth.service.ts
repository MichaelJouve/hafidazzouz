import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

  provider: firebase.auth.GoogleAuthProvider;

  constructor(public afAuth: AngularFireAuth) {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(this.provider);
  }

  logout() {
    return firebase.auth().signOut();
  }

  loginWithEmail(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            alert(error);
            reject(error);
          }
        );
      }
    );
  }

}
