import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase関連
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

//angularfire2
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//formControl
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { RoomsComponent } from './rooms/rooms.component';
import { RoomIndexComponent } from './room-index/room-index.component';
import { RoomInfoComponent } from './room-info/room-info.component';
import { RoomChatComponent } from './room-chat/room-chat.component';
import { RoomMeComponent } from './room-me/room-me.component';
import { RoomWorkComponent } from './room-work/room-work.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { RoomNewComponent } from './room-new/room-new.component';
import { RoomsTopComponent } from './rooms-top/rooms-top.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostIndexComponent } from './post-index/post-index.component';
import { RoomPostComponent } from './room-post/room-post.component';
import { RoomPostIndexComponent } from './room-post-index/room-post-index.component';
import { UidToUsernamePipe } from './pipes/uid-to-username.pipe';
import { UserPostIndexComponent } from './user-post-index/user-post-index.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { FollowButtonComponent } from './follow-button/follow-button.component';
import { SubButtonComponent } from './sub-button/sub-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ToolBarComponent,
    RoomIndexComponent,
    RoomInfoComponent,
    RoomChatComponent,
    RoomMeComponent,
    RoomWorkComponent,
    UsersComponent,
    UserLoginComponent,
    UserSignupComponent,
    RoomNewComponent,
    RoomsTopComponent,
    UserDialogComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    PostIndexComponent,
    RoomPostComponent,
    RoomPostIndexComponent,
    UidToUsernamePipe,
    UserPostIndexComponent,
    PostSingleComponent,
    LikeButtonComponent,
    FollowButtonComponent,
    SubButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  entryComponents: [UserDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
