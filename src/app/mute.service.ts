import { Injectable } from '@angular/core';
import { Mute } from './mute';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MuteService {

  constructor(private db: AngularFirestore) { }

  setMute(muterId: string, muteeId: string) {
    const mute = new Mute(muterId, muteeId);
    const muteRef = this.db.collection('mutes').doc(muterId + muteeId);
    muteRef.set(mute.deserialize());
  }

  unMute(muterId: string, muteeId: string) {
    const mute = new Mute(muterId, muteeId);
    const muteRef = this.db.collection('mutes').doc(muterId + muteeId);
    muteRef.update(mute.deserialize())
      .then(() => muteRef.delete())
      .catch(() => console.warn("The user is not muted"));
  }

  checkMute(muterId: string, muteeId: string): Observable<boolean> {
    const muteRef = this.db.collection('mutes').doc(muterId + muteeId);
    return muteRef.snapshotChanges().pipe(map(action => action.payload.exists));
  }

}
