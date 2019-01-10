import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from 'src/environments/environment';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AppComponent } from './app.component';
import { FeatherIconsPipe } from './feather-pipe';
import { FooterComponent } from './footer/footer.component';
import { GalleryWeddingComponent } from './gallery-wedding/gallery-wedding.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFireStorage } from 'angularfire2/storage';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'wedding-gallery', component: GalleryWeddingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    GalleryComponent,
    GalleryWeddingComponent,
    FeatherIconsPipe,
    SignInComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorage,
  ],
  providers: [
    AuthService,
    DatabaseService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
