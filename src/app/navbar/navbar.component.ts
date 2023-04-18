import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private getName: ServiceService,
    private auth: AuthenticationService,
    private router: Router
  ) {}
  navData: string;

  ngOnInit() {
    this.getName.notificationSubject.subscribe((d) => {
      this.navData = d;
    });
  }
  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
