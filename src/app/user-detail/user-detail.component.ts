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

  name: string;
  uid: string;
  desc: string;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private session: SessionService) {
    this.getUserData();
  }

  ngOnInit() {
  }

  getUserData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserWithId(id).subscribe(user => {
      this.name = user.name;
      this.uid = user.uid;
      this.desc = user.desc;
    });
  }

  onLogOutClicked(){
    this.session.logout();
  }

}
