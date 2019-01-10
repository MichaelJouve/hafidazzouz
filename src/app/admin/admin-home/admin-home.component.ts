import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Gallery } from 'src/app/models/gallery.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  galleries;

  constructor(private authService: AuthService, private databaseService: DatabaseService) { }


  ngOnInit() {
    this.galleries = this.databaseService.getGalleries();
  }

  logOut() {
    this.authService.logout();
  }

  private uploadFile(event) {
    const file = event.target.file;
  if (file.length === 1) {
    console.log(file); // You will see the file
    this.databaseService.savePicture(file, Gallery.name);
  }
  }
}
