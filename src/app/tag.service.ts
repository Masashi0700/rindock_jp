import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from './tag';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private db: AngularFirestore) { }

  createTag(subjectId: string, content: string, subjectType: string) {
    const tagId = this.db.createId();
    const tag = new Tag(tagId, subjectId, content, subjectType);
    this.db.collection('tags').doc(tagId).set(tag.deserialize());
  }

  getTags(subjectId: string): Observable<Tag[]> {
    return this.db.collection<Tag>('tags', ref => ref.where('subjectId', '==', subjectId))
      .valueChanges();
  }

  deleteTagWithTagId(tagId: string) {
    this.db.collection('tags').doc(tagId).delete();
  }

}
