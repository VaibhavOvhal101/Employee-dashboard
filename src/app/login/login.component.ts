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
  constructor(private router: Router, private notification: ServiceService) {}
  Name: string | undefined
  lastName: string | undefined

  loginForm = new FormGroup({
    fName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lName: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
  })
  get fName() {
    return this.loginForm.get('fName')
  }
  get lName() {
    return this.loginForm.get('lName')
  }
  get mobileNo() {
    return this.loginForm.get('mobileNo')
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
