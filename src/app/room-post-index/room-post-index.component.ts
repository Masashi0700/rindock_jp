import { Component, OnInit } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { User } from '../user';
import { Room } from '../room';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-post-index',
  templateUrl: './room-post-index.component.html',
  styleUrls: ['./room-post-index.component.css']
})
export class RoomPostIndexComponent implements OnInit {

  posts: Observable<any>;


  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private roomService: RoomService) {
    const roomId = this.route.snapshot.paramMap.get('id');

    this.posts = this.postService.getPostsObservableWithRoomId(roomId).pipe(
      map(posts => {
        return posts.map(post => {
          return this.userService.getUserWithId(post.postUId).pipe(map(user => {
            return { ...post, ...user };
          }));
        });
      }),
      mergeMap(posts => {
        return combineLatest(posts);
      }),
      map(posts => {
        return posts.map(post => {
          return this.roomService.getRoom(post.postRoomId).pipe(map(room => {
            return { ...post, ...room };
          }));
        });
      }),
      mergeMap(posts => {
        return combineLatest(posts);
      })
    );

    /*
        this.posts = this.postService.getPostsObservableWithRoomId(roomId).pipe(
          map(posts => {
            return posts.map(post => {
              return this.userService.getUserWithId(post.postUId).pipe(map(user => {
                return { ...post, ...user };
              }));
            });
          }),
          mergeMap(posts => {
            return combineLatest(posts);
          })
        );
        */
  }

  ngOnInit() {
  }

  /*  getUserAndRoomReady() {
      console.warn("hey");
      this.posts.forEach(function(value, index) {
        if (value !== undefined) {
          this.userService.getUserWithId(value.uid).subscribe(user => this.users[index] = user);
          this.roomService.getRoom(value.uid).subscribe(room => this.rooms[index] = room);
        } else {
          this.users[index] = EMPTY;
          this.rooms[index] = EMPTY;
        }
      });
    }*/

}
