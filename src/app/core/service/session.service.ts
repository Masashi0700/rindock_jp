import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

import { Session } from '../../session';
import { Password } from '../../password';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public session = new Session();
  public sessionSubject = new Subject<Session>();
  public sessionState = this.sessionSubject.asObservable();

  authState: any = null;

  signup(account: Password, name: string): void { // 追加
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(account.email, account.password) // アカウント作成
      .then(auth => {
        auth.user.sendEmailVerification();
        this.userService.createUserWithIdAndName(auth.user.uid, name);
      }) // メールアドレス確認
      .then(() => {
        alert('メールアドレス確認メールを送信しました。');
      })
      .catch(err => {
        console.log(err);
        alert('アカウントの作成に失敗しました。\n' + err)
      })
  }

  login(account: Password): void { // 変更
    this.afAuth
      .auth
      .signInWithEmailAndPassword(account.email, account.password)
      .then(auth => {
        // メールアドレス確認が済んでいるかどうか
        if (!auth.user.emailVerified) {
          this.afAuth.auth.signOut();
          return Promise.reject('メールアドレスが確認できていません。');
        } else {
          this.session.login = true;
          this.session.uid = auth.user.uid;
          this.sessionSubject.next(this.session);
          //return this.router.navigate(['/']);
        }
      })
      .then(() => alert('ログインしました。'))
      .catch(err => {
        console.log(err);
        alert('ログインに失敗しました。\n' + err);
      })
  }

  logout(): void {// 変更
    this.afAuth
      .auth
      .signOut()
      .then(() => {
        this.sessionSubject.next(this.session.reset());
        //return this.router.navigate(['/account/login']);
      }).then(() => alert('ログアウトしました。'))
      .catch(err => {
        console.log(err);
        alert('ログアウトに失敗しました。\n' + err);
      })
  }

  // ログイン状況確認
  checkLogin(): void { // 追加
    this.afAuth
      .authState
      .subscribe(auth => {
        // ログイン状態を返り値の有無で判断
        this.session.login = (!!auth);
        this.sessionSubject.next(this.session);
      });
  }

  checkLoginState(): Observable<Session> { // 追加
    return this.afAuth
      .authState
      .pipe(
        map(auth => {
          // ログイン状態を返り値の有無で判断
          this.session.login = (!!auth);
          return this.session;
        })
      )
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  constructor(private afAuth: AngularFireAuth, private userService: UserService) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
}
