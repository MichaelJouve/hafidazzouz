import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { Gallery } from '../models/gallery.model';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {



  constructor(private fireStorage: AngularFireStorage, private fireDatabase: AngularFireDatabase) { }

  public getGalleries() {
    return firebase.database().ref('/galleries/').once('child_changed')
    .then(() => {
      console.log('getGallerie ok');
    }, (error) => {
      console.log(error);
    });
  }

  public savePicture(file, galleryId) {
    return new Promise(((resolve, reject) => {
      const storageRef = this.fireStorage.storage.ref();
      const fileRef = storageRef.child('galleries/' + galleryId);
      fileRef.put(file)
        .then(() => {
          fileRef.getDownloadURL().then((Url) => resolve(Url), (error) => reject(error));
        }, (error) => reject(error));
    }));
  }




}
