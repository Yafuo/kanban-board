import {Component, OnInit, Renderer2} from '@angular/core';
import {ACCOUNTS} from '../mock-account';
import {Router} from '@angular/router';
import {AccountService} from '../service/account-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  accounts = ACCOUNTS;
  userName = '';
  pwd = '';
  isError = false;
  errorMessage = 'Invalid username or password';
  constructor(private router: Router, private render: Renderer2, private accountService: AccountService) { }

  ngOnInit() {
    this.render.setStyle(document.body, 'background-color', '#191919');
  }

  checkAccount() {
    this.accounts.forEach(acc => {
      if (acc.userId === this.userName && acc.pwd === this.pwd) {
        this.isError = false;
        this.accountService.changeMessage(acc);
        this.router.navigateByUrl('/home');
      } else {
        this.isError = true;
      }
    });
  }

}
