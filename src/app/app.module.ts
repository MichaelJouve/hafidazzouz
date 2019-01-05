import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryWeddingComponent } from './gallery-wedding/gallery-wedding.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsPipe } from './feather-pipe';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';

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
    AngularFireAuthModule

  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
