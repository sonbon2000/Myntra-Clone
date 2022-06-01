import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

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
