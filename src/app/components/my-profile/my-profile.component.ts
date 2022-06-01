import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

interface User {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  user: User = {
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  originalUser: User;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe((res: any) => {
      this.originalUser = { ...res.data };
      this.user = { ...this.originalUser };
    });
  }

  canExit = () => {
    if (JSON.stringify(this.user) !== JSON.stringify(this.originalUser)) {
      let result = confirm(
        'You havent saved your editing yet, are you sure want to navigate away'
      );
      return result;
    }
    return true;
  };

  onSave() {
    this.originalUser = { ...this.user };
  }
}
