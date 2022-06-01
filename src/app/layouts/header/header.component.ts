import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showDropDown = false;
  show: boolean = false;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.show = false;
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  goToMyProfile() {
    this.show = false;
    this.router.navigateByUrl('/my-profile');
  }
  goToAdminPage() {
    this.show = false;
    this.router.navigateByUrl('/admin');
  }
}
