import { Component, OnInit, ElementRef } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Gallery } from 'src/app/models/gallery.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-galleries',
  templateUrl: './admin-galleries.component.html',
  styleUrls: ['./admin-galleries.component.css']
})
export class AdminGalleriesComponent implements OnInit {
  galleries: Gallery[];

  constructor(private databaseService: DatabaseService, private snackBar: MatSnackBar) { }
  galleryName: ElementRef;

  ngOnInit() {
    this.databaseService.galleriesObs.subscribe(result => {
      if (result) {
        this.galleries = result;
      }
    });
  }

  // Used to upload files to a specific gallery in 'galleries/'
  private uploadPicturesInGalleries(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      if (files[i] && this.galleryName.nativeElement.value) {
        const picture = files[i];
        const pathAndPictureName = 'galleries/' + this.galleryName.nativeElement.value + '/' + picture.name;

        this.databaseService.savePicture(picture, pathAndPictureName).then(() => {
          this.snackBar.open('Upload de ' + picture.name + ' terminé', '', {
            panelClass: 'successSnackBar'
          });
        },
          error => {
            this.snackBar.open('Upload impossible de ' + picture.name + ' : ' + error, '', {
              panelClass: 'dangerSnackBar'
            });
          }
        );
      }
    }
  }
}
