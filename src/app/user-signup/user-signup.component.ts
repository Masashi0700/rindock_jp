import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Password } from '../password';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public account = new Password();

  userSignUpFormGroup = new FormGroup({
    emailFormControl: new FormControl('',[
      Validators.email,
      Validators.required
    ]),
    passwordFormControl: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    nameFormControl: new FormControl('',[
      Validators.required
    ])
  });

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.account.email = this.userSignUpFormGroup.get('emailFormControl').value;
    this.account.password = this.userSignUpFormGroup.get('passwordFormControl').value;

    this.session.signup(this.account, this.userSignUpFormGroup.get('nameFormControl').value);
    this.account.reset();
    console.warn(this.account);
  }

  get emailFormControl(){
    return this.userSignUpFormGroup.get('emailFormControl');
  }

  get passwordFormControl(){
    return this.userSignUpFormGroup.get('passwordFormControl');
  }

  get nameFormControl(){
    return this.userSignUpFormGroup.get('nameFormControl');
  }

}
