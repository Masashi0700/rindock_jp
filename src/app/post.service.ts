import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

    if (post.postImgName) {
      const imgRef = firebase.storage().ref().child('posts').child(postId).child(post.postImgName);
      var uploadTask = imgRef.put(file);
      uploadTask.then(() => {
        imgRef.getDownloadURL().then(url => {
          post.postImgUrl = url;
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

  createReply(post: Post, file: File, replyId: string) {
    const postId = this.db.createId();

    if (post.postImgName) {
      const imgRef = firebase.storage().ref().child('posts').child(postId).child(post.postImgName);
      var uploadTask = imgRef.put(file);
      uploadTask.then(() => {
        imgRef.getDownloadURL().then(url => {
          post.postImgUrl = url;
          post.postId = postId;
          post.postReplyId = replyId;
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
      post.postReplyId = replyId;
      this.db
        .collection('posts')
        .doc(postId)
        .set(post.deserialize());
      console.warn("uploaded without img" + post);
      post.reset();
    }
  }

  getAPostWithPostId(postId: string): Observable<Post> {
    return this.db.collection('posts').doc<Post>(postId).valueChanges();
  }

  getReplyWithPostId(postId: string): Observable<Post[]> {
    return this.db.collection<Post>('posts', ref => ref.where('postReplyId', '==', postId))
      .valueChanges();
  }

  getPostsObservableWithRoomId(roomId: string): Observable<Post[]> {
    return this.db.collection<Post>('posts', ref => ref.where('postRoomId', '==', roomId).where('postReplyId', '==', ''))
      .valueChanges();
  }

  getPostsObservableWithUserId(userId: string): Observable<Post[]> {
    return this.db.collection<Post>('posts', ref => ref.where('postUId', '==', userId))
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

  getHotPosts(amount: number, range: string): Observable<Post[]> {//"day","week","month","year","all","new"
    if (range === "day") {
      return this.db.collection<Post>('posts', ref =>
        ref.where('postAgeDay', '==', true)
          .orderBy('postNumOfLikes', 'desc')
          .limit(amount)).valueChanges();
    } else if (range === "week") {
      return this.db.collection<Post>('posts', ref =>
        ref.where('postAgeWeek', '==', true)
          .orderBy('postNumOfLikes', 'desc')
          .limit(amount)).valueChanges();
    } else if (range === "month") {
      return this.db.collection<Post>('posts', ref =>
        ref.where('postAgeMonth', '==', true)
          .orderBy('postNumOfLikes', 'desc')
          .limit(amount)).valueChanges();
    } else if (range === "year") {
      return this.db.collection<Post>('posts', ref =>
        ref.where('postAgeYear', '==', true)
          .orderBy('postNumOfLikes', 'desc')
          .limit(amount)).valueChanges();
    } else if (range === "all") {
      return this.db.collection<Post>('posts', ref =>
        ref.orderBy('postNumOfLikes', 'desc')
          .limit(amount)).valueChanges();
    } else if (range === "new") {//new
      return this.db.collection<Post>('posts', ref =>
        ref.orderBy('postDate', 'desc')
          .limit(amount)).valueChanges();
    } else {
      return this.db.collection<Post>('posts', ref =>
        ref.orderBy('postDate', 'desc')
          .limit(amount)).valueChanges();
    }
  }
}
