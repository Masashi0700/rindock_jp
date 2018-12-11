import { Component, OnInit, ViewChild, Inject, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {

  user: User;

  @ViewChild('fileInput')
  fileInput;
  file: File | null = null;
  imgSrc: string;

  userEditFormGroup = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    descFormControl: new FormControl('', [
      Validators.maxLength(500)
    ])
  });

  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService) {
    const uid = this.data.uid;
    this.userService.getUserWithId(uid).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  onSubmit() {
    const editedUser = new User(this.user.uid, this.nameFormControl.value);
    editedUser.desc = this.descFormControl.value;
    if (!!this.file) {
      editedUser.imgName = this.file.name;
    }else{
      editedUser.imgName = this.user.imgName;
      editedUser.imgUrl = this.user.imgUrl;
    }
    this.userService.updateUserWithUserAndFile(editedUser, this.file);
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result as string;
      reader.readAsDataURL(this.file);
    }
  }

  get nameFormControl() {
    return this.userEditFormGroup.get('nameFormControl');
  }

  get descFormControl() {
    return this.userEditFormGroup.get('descFormControl');
  }

}
