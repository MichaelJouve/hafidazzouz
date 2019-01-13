import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore, fromDocRef} from '@angular/fire/firestore';
import { Gallery } from '../models/gallery.model';
import { Observable, of } from 'rxjs';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

galleriesObs: Observable<Gallery[]> = of(null);

  constructor(private fireStorage: AngularFireStorage, private fireDatabase: AngularFirestore) {
      this.galleriesObs = this.fireDatabase.collection<Gallery>('galleries').valueChanges();
     }



  public savePicture(file, galleryId) {
    return new Promise(((resolve, reject) => {
      console.log('dans savePicture');
      const storageRef = this.fireStorage.storage.ref();
      const fileRef = storageRef.child('galleries/' + galleryId);
      fileRef.put(file)
        .then(() => {
          resolve();
        },
          error => {
            reject(error);
          });
    }));
  }

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
