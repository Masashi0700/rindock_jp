import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { Session } from '../session';
import { SessionService } from '../core/service/session.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  title = "Rindock";
  login: boolean;
  user: User;
  userId: string;

  constructor(public dialog: MatDialog,
    private session: SessionService,
    private userService: UserService) {
    this.session.currentUserObservable.subscribe(authState => {
      this.login = (!!authState);
      this.userId = authState.uid;
      this.userService.getUserWithId(authState.uid).subscribe(user => this.user = user);
    });
    /*
    this.user = this.session.currentUserObservable.pipe(
      switchMap(authState => this.userService.getUserWithId(authState.uid))
    );
    /*this.session.currentUserObservable.subscribe(
      authState => {
        this.login = (!!authState);
        this.userId = authState.uid;
      }
    );*/
  }

  ngOnInit() {
  }

  onLoginClick() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px'
    });
  }

  onProfileClick() {

  }

}
