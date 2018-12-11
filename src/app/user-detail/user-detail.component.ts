import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';
import { SessionService } from '../core/service/session.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  public internalUser: User;
  defaultAvatar = '/assets/Default_avatar.png';


  constructor(private session: SessionService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.user) {
      this.internalUser = this.user;
    }
  }


  onLogOutClicked() {
    this.session.logout();
  }

  onEditClicked() {
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '500px',
      data: {
        uid: this.internalUser.uid
      }
    });
  }

}
