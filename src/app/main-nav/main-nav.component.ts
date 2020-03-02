import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor(private router: Router) { }

  onLogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
