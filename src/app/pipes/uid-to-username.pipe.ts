import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'uidToUsername'
})
export class UidToUsernamePipe implements PipeTransform {

  constructor(private userService: UserService){

  }

  transform(value: string, args?: any): Observable<User> {
    return this.userService.getUserWithId(value);
  }

}
