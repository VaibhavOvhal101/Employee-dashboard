import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  value2: any;
  u1: any;
  constructor(
    private router: Router,
    private notification: ServiceService,
    private service: AuthenticationService
  ) {}
  Name: string | undefined;
  msg = '';
  password1: string | undefined;

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    console.log();
  }
  sendData(message: { value: unknown }) {
    this.notification.sendNotification(message.value);
    this.notification.sendUsrData(this.loginForm.value);
    console.log(this.loginForm.value);
    this.check(this.loginForm.value.userName, this.loginForm.value.password);
  }
  check(uname: string, p: string) {
    var output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}
