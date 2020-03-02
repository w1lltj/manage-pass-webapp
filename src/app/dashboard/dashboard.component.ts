import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {UserCredential} from '../user-credential.model';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup = new FormGroup({
    'user_email': new FormControl(null),
    'user_password': new FormControl(null)
  });

  dashboardMessage: {
    messageStatus: number;
    messageText: string;
    type: string;
  };


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn() {
    const credential: UserCredential = {
      email: this.dashboardForm.get('user_email').value,
      password: this.dashboardForm.get('user_password').value
    };

    this.authService.onSignIn(credential)
      .subscribe(
        res => {
          console.log('res..... ', res);

          localStorage.setItem('token', res.token);

          this.dashboardMessage = {
            messageStatus: 201,
            messageText: res.message,
            type: 'success'
          };

          this.router.navigate(['/', 'password-management']);
        },
        err => {
          this.dashboardMessage = {
            messageStatus: err.status,
            messageText: (err.status === 401) ? err.statusText : err.statusText,
            type: 'danger'
          };
        }

      );
  }

  onRegister() {
    const credential = {
      email: this.dashboardForm.get('user_email').value,
      password: this.dashboardForm.get('user_password').value
    };

    this.authService.onRegister(credential)
      .subscribe(
        res => {
          console.log('res..... ', res);
          this.dashboardMessage = {
            messageStatus: 201,
            messageText: res.message,
            type: 'success'
          };
        },
        err => {
          this.dashboardMessage = {
            messageStatus: err.status,
            messageText: (err.status === 401) ? err.statusText.concat('. User Exist!') : err.statusText,
            type: 'danger'
          };
        }
      );
  }
}
