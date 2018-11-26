import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  title = "Rindock";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  onLoginClick() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px'
    });
  }

}
