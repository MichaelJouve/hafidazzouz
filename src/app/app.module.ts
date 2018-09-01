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
import { AuthService } from './serices/auth.service';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'wedding--gallery', component: GalleryWeddingComponent },
  { path: '**', component: HomeComponent }
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    AuthService,
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
