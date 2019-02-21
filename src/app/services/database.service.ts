import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import { Gallery } from '../models/gallery.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

galleriesObs: Observable<Gallery[]> = of(null);

  constructor(private fireStorage: AngularFireStorage, private fireDatabase: AngularFirestore) {
      this.galleriesObs = this.fireDatabase.collection<Gallery>('galleries').valueChanges();
     }


/**
 * Save file in bdd
 * @param file
 * @param pathAndPictureName: String
 */
  public savePicture(file, pathAndPictureName: String) {
    return new Promise(((resolve, reject) => {
      const storageRef = this.fireStorage.storage.ref();
      const path: string = pathAndPictureName + '/';
      const fileRef = storageRef.child(path);
      fileRef.put(file)
        .then(() => {
          resolve();
        },
          error => {
            reject(error);
          });
    }));
  }

  /**
   * Add new gallery in bdd
   * 'galleries' is the collection name
   * @param newGallery
   */
  public addGallery(newGalleryName: String) {
      this.fireDatabase.collection('galleries').add({
      name: newGalleryName,
      visible: true,
    })
      .then((docRef) => {
        this.galleriesObs.subscribe();
      },
      (error) => {
        console.error('Error adding gallery: ', error);
      });
  }

  public checkIfGalleryExist( galleryName ): Boolean {
    console.log(this.galleriesObs);

    if (this.galleriesObs[galleryName]) { console.log('trueee'); return true; } else {console.log('falseeee'); return false; }
  }

}
