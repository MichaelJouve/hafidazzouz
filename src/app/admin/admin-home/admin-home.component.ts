import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Gallery } from 'src/app/models/gallery.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  galleries: Gallery[];

  @ViewChild('galleryName')
  galleryName: ElementRef;

  constructor(private authService: AuthService, private databaseService: DatabaseService, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.databaseService.galleriesObs.subscribe(result => {
      if (result) {
        this.galleries = result;
      }
    });
  }

  logOut() {
    this.authService.logout();
  }

  // Used to upload files to a specific gallery in 'galleries/'
  private uploadPicturesInGalleries(event) {
    const files = event.target.files;

    for ( let i = 0; i < files.length; i++) {
      if (files[i] && this.galleryName.nativeElement.value) {
        const picture = files[i];
        const pathAndPictureName = 'galleries/' + this.galleryName.nativeElement.value + '/' + picture.name;

        this.databaseService.savePicture(picture, pathAndPictureName).then(() => {
          this.snackBar.open('Upload de ' + picture.name + ' terminé', '');
        },
          error => {
            this.snackBar.open(error, '', {
              // panelClass: 'dangerSnackBar'
            });
          }
        );
      }
    }
  }
}
