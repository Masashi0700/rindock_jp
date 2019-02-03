import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-general',
  templateUrl: './room-general.component.html',
  styleUrls: ['./room-general.component.css']
})
export class RoomGeneralComponent implements OnInit {

  generalImg = "/assets/gen-room.png";
  lobbyImg = "/assets/lobby.png";

  constructor() { }

  ngOnInit() {
  }

}
