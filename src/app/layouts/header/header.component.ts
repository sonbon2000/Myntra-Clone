import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent
  implements OnInit
{
  showDropDown: boolean = false;
  show: boolean = false;
  showMenu: boolean = false;
  @ViewChild('headerMenu') headerMenu: ElementRef;
  constructor(
    public authService: AuthService,
    private router: Router,
    public cartService: CartService,
    public wishList: WishListService
  ) {}

  // ngDoCheck() {
  //   console.log('Header');
  //   console.log('ngDoCheck is running');
  // }

  // ngAfterContentChecked() {
  //   console.log('Header');

  //   console.log('ngAfterContentCheck is running');
  // }

  // ngAfterViewChecked() {
  //   console.log('Header');

  //   console.log('ngAfterViewCheck is running');
  // }

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

  onShowDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  onShowMenu() {
    this.showDropDown = !this.showDropDown;
  }
}
