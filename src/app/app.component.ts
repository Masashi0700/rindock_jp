import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SessionService } from './core/service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rindock';

  constructor(private session: SessionService) { // 追加
    this.session.checkLogin();
  }
}
