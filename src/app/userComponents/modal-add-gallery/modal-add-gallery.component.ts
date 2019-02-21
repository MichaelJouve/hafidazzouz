import { Component, Input, Inject } from '@angular/core';
import { Gallery } from 'src/app/models/gallery.model';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-modal-add-gallery',
  templateUrl: './modal-add-gallery.component.html',
  styleUrls: ['./modal-add-gallery.component.css']
})
export class ModalAddGalleryComponent {

private nameNewGallery: String;

  constructor(private databaseService: DatabaseService, @Inject(MAT_DIALOG_DATA) public data: Gallery[],  private dialog: MatDialog) { }

  public addNewGallery() {
    console.log(this.data);
    let isGalleryExist = false;

    this.data.forEach((gallery) => {
      if (gallery.name === this.nameNewGallery) {
        isGalleryExist = true;
      }
    });
    if (this.nameNewGallery.length > 2 &&
      this.nameNewGallery.length < 30 &&
      !isGalleryExist )
      {
      this.databaseService.addGallery(this.nameNewGallery);
      this.dialog.closeAll();
    }
  }

  public closeModal(): void {
    this.nameNewGallery = '';
    this.dialog.closeAll();
  }
}
