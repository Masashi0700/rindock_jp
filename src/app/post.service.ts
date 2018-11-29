import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFirestore) { }

  createPost(post: Post, file: File) {
    const postId = this.db.createId();
    post.postId = postId;
    this.db
      .collection('posts')
      .doc(postId)
      .set(post.deserialize());

    if (post.imgName) {
      const imgRef = firebase.storage().ref().child('posts').child(postId).child(post.imgName);
      imgRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
    }
  }
}
