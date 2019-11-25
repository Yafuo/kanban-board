import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Account} from '../mock-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account = {
    userId: 'unset',
    pwd: 'unset',
    level: 'PO'
  };
  messageSource = new BehaviorSubject(this.account);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
