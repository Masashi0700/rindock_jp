import { Component, OnInit } from '@angular/core';
import { SessionService } from '../core/service/session.service';
import { Observable } from 'rxjs';
import { Subs } from '../subs';
import { SubsService } from '../subs.service';

@Component({
  selector: 'app-room-subs-list',
  templateUrl: './room-subs-list.component.html',
  styleUrls: ['./room-subs-list.component.css']
})
export class RoomSubsListComponent implements OnInit {

  subs$: Observable<Subs[]>

  constructor(private session: SessionService,
    private subsService: SubsService) {
    this.subs$ = this.subsService.getSubsWithUserId(this.session.currentUserId);
  }

  ngOnInit() {
  }

}
