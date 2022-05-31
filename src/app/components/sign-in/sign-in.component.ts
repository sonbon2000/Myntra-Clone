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
    userName: 'janet.weaver@reqres.in',
    password: 'abc1234',
  };
  signInForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
    ]),
  });
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  get userName() {
    return this.signInForm.get('userName');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onLogin() {
    this.authService.login(this.user).subscribe((res) => {
      if (res) {
        this.router.navigate(['/home']);
      }
    });
  }
}
