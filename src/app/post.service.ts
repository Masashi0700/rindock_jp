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

    if (post.imgName) {
      const imgRef = firebase.storage().ref().child('posts').child(postId).child(post.imgName);
      var uploadTask = imgRef.put(file);
      uploadTask.then(() => {
        imgRef.getDownloadURL().then(url => {
          post.imgUrl = url;
          post.postId = postId;
          this.db
            .collection('posts')
            .doc(postId)
            .set(post.deserialize());
          console.warn("Uploaded with img" + post);
          post.reset();
        }).catch(err => {
          console.warn(err);
          post.reset();
        });
      }).catch(err => {
        console.warn(err);
        post.reset();
      });
    } else {
      post.postId = postId;
      this.db
        .collection('posts')
        .doc(postId)
        .set(post.deserialize());
      console.warn("uploaded without img" + post);
      post.reset();
    }
  }

  getPostsObservableWithRoomId(roomId: string): Observable<Post[]> {
    return this.db.collection<Post>('posts', ref => ref.where('roomId', '==', roomId))
      .valueChanges();
  }

  getPostImgWithPostIdAndImgName(postId: string, imgName: string): any {
    const noImgPath = 'assets/no-image-icon.png';
    const imgRef = firebase.storage().ref().child('posts').child(postId).child(imgName);
    return imgRef.getDownloadURL().then(url => {
      console.warn(url);
    }).catch(err => {
      console.warn(noImgPath);
    });
  }


}
