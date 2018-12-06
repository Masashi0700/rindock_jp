import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../core/service/session.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Observable<User>;
  //currentUserId: string;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private session: SessionService) {
    this.user = this.userService.getUserWithId(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {
  }


  onLogOutClicked(){
    this.session.logout();
  }

  onEditClicked(){

  }

}
