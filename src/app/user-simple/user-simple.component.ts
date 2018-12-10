import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-simple',
  templateUrl: './user-simple.component.html',
  styleUrls: ['./user-simple.component.css']
})
export class UserSimpleComponent implements OnInit {

  @Input() userInput: User;
  public internalUser: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.userInput) {
      this.internalUser = this.userInput;
    }
  }

}
