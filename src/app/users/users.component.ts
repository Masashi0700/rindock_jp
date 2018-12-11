import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: Observable<User>;

  constructor(private userService: UserService,
    private route: ActivatedRoute) {
    this.user = this.userService.getUserWithId(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
