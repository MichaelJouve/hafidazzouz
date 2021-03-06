import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';

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
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { AdminGalleriesComponent } from './admin/admin-galleries/admin-galleries.component';
import { AdminEditGalleryComponent } from './admin/admin-edit-gallery/admin-edit-gallery.component';
import { ModalAddGalleryComponent } from './userComponents/modal-add-gallery/modal-add-gallery.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'wedding-gallery', component: GalleryWeddingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'editGallery', component: AdminEditGalleryComponent },
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
    AdminGalleriesComponent,
    AdminEditGalleryComponent,
    ModalAddGalleryComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    DatabaseService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000}},
  ],
  bootstrap: [AppComponent],

  entryComponents: [
    ModalAddGalleryComponent,
  ],
})
export class AppModule { }
