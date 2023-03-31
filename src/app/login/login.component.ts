import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ServiceService } from '../services/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private notification: ServiceService) { }
  Name: string | undefined
  password1: string | undefined

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),]),

  })
  get userName() {
    return this.loginForm.get('userName')
  }
  get password() {
    return this.loginForm.get('password')
  }
  onSubmit() {
    console.log()
  }
  sendData(message: { value: unknown }) {
    this.notification.sendNotification(message.value)
    this.notification.sendUsrData(this.loginForm.value)
    console.log(this.loginForm.value)
    this.router.navigate(['/dashboard'])
  }
}
