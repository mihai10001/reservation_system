import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Place } from './place.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  constructor(private firestore: AngularFirestore) {
  }

  getPlacesAPIObservable() {
    return this.firestore.collection('places').snapshotChanges();
  }

  getPlaceAPIObservable(id: string) {
    return this.firestore.collection('places').doc(id).get();
  }

  createPlaceAPIPromise(place: Place) {
    // Normalise model for Firebase
    delete place.id;
    place = {...place};
    place.openDays = {...place.openDays};

    return this.firestore.collection('places').add(place);
  }

  updatePlaceAPIPromise(place: Place) {
    // Normalise model for Firebase
    place = {...place};
    place.openDays = {...place.openDays};

    return this.firestore.doc('places/' + place.id).update(place);
  }

  deletePlace(place: Place) {
    this.firestore.doc('places/' + place.id).delete();
  }
}