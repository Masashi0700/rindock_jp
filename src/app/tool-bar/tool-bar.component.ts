import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { Session } from '../session';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  title = "Rindock";
  login: boolean;
  userId: string;

  constructor(public dialog: MatDialog, private session: SessionService) {
    this.session.currentUserObservable.subscribe(
      authState => {
        this.login = (!!authState);
        this.userId = authState.uid;
      }
    );
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
