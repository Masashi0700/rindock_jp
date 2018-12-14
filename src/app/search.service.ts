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

  searchPost(word: string): Observable<Post[]> {
    return this.db.collection<Post>('posts', ref =>
      ref.where('postContent', 'array-contains', word)).valueChanges();
  }

}
