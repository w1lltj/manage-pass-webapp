import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSignIn() {

  }

  onRegister() {

  }
}
