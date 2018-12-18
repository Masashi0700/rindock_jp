import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user';
import { Post } from './post';
import { Room } from './room';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private db: AngularFirestore) { }

  searchWithTag(word: string): Observable<Tag[]> {
    return this.db.collection<Tag>('tags', ref =>
      ref.where('content', '==', word)).valueChanges();
  }

  searchPost(word: string): Observable<Tag[]> {
    return this.db.collection<Tag>('tags', ref =>
      ref.where('subjectType', '==', 'post').where('content', '==', word)).valueChanges();
  }

  searchRoom(word: string): Observable<Tag[]> {
    return this.db.collection<Tag>('tags', ref =>
      ref.where('subjectType', '==', 'room').where('content', '==', word)).valueChanges();
  }

  searchUser(word: string): Observable<Tag[]> {
    return this.db.collection<Tag>('tags', ref =>
      ref.where('subjectType', '==', 'user').where('content', '==', word)).valueChanges();
  }
}
