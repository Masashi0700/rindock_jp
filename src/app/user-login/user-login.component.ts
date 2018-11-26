import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Password } from '../password';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public account = new Password();

  constructor(private session: SessionService) { }

  userLogInFormGroup = new FormGroup({
    emailFormControl: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    passwordFormControl: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get emailFormControl(){
    return this.userLogInFormGroup.get('emailFormControl');
  }

  get passwordFormControl(){
    return this.userLogInFormGroup.get('passwordFormControl');
  }

  onSubmit(){
    this.account.email = this.userLogInFormGroup.get('emailFormControl').value;
    this.account.password = this.userLogInFormGroup.get('passwordFormControl').value;
    this.session.login(this.account);
    this.account.reset();
    console.warn(this.account);
  }

  ngOnInit() {
  }

}
