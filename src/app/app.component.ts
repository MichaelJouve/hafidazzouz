import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hafidazzouz';
  @Output() mobileDevice: boolean;

  public user: Observable<firebase.User>;
  isLogged = false;
  public email: String;

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) {
    this.user = this.authService.afAuth.authState;

    this.user.subscribe((auth) => {

      if (auth) {
        this.isLogged = true;
        this.email = auth.email;
        console.log('Connecté');

      } else {
        console.log('Déconnecté');
        this.isLogged = false;
        this.email = '';
      }
    });
  }
  ngOnInit(): void {
    // check screen size. If small
    this.mobileDevice = false;
    if (window.innerWidth < 768) {
      this.mobileDevice = true;
    }
  }

}
