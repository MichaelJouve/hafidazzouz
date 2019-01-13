import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore, fromDocRef} from '@angular/fire/firestore';
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
 * @param pathAndPictureName
 */
  public savePicture(file, pathAndPictureName) {
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
  public addGallery(newGallery: Gallery) {
    this.fireDatabase.collection('galleries').add({
      name: newGallery.name,
      visible: newGallery.visible,
    })
      .then((docRef) => {
      },
      (error) => {
        console.error('Error adding document: ', error);
      });
  }


}
