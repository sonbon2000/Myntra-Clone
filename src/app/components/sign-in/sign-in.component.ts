import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    window.scroll(0, 0);
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onDemo() {
    this.user = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
  }

  onLogin() {
    this.authService.login(this.user).subscribe((res) => {
      if (res) {
        this.router.navigate(['/home']);
      }
    });
  }
}
