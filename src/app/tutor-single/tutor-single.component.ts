import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from '../tutor';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tutor-single',
  templateUrl: './tutor-single.component.html',
  styleUrls: ['./tutor-single.component.css']
})
export class TutorSingleComponent implements OnInit {

  @Input() tutor: Tutor;
  public internalTutor: Tutor;

  user: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.tutor) {
      this.internalTutor = this.tutor;
      this.user = this.userService.getUserWithId(this.internalTutor.userId);
    }
  }

}
