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

  private uploadFile(event) {
    const file = event.target.files[0];
    if (file) {
      this.databaseService.savePicture(file, this.galleryName.nativeElement.value).then(() => {
        console.log('toto');
        this.snackBar.open('Done', 'toto');
      },
        error => {
          this.snackBar.open(error, '', {
            // panelClass: 'dangerSnackBar'
          });
        }
      );
    }
  }
  public toto() {
    this.snackBar.open('Done', '', {
      panelClass: 'dangerSnackBar'
    });
  }
}
