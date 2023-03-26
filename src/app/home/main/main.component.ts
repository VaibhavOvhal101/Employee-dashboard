import { Component, Input } from '@angular/core'
import { ServiceService } from '../../services/service.service'
import { TableService } from '../../services/table.service'
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  users: any
  user1: any
  notificationMessage: any = ''
  loginform: any
  userdetails: any
  firstname: any
  lastName: any
  mobile: any
  constructor(
    public notification: ServiceService,
    public userData: TableService,
  ) {}
  ngOnInit() {
    this.notification.notificationSubject.subscribe((d: any) => {
      this.notificationMessage = d
      // console.log('main', d, this.notificationMessage)
    })
    // this.notificationMessage = 'vrush'
    this.userData.users().subscribe((data) => {
      this.users = data
      this.user1 = this.users[0].id
      // console.log(this.users)
    })
    this.notification.userDataSubject.subscribe((d: any) => {
      this.userdetails = d
      console.log(this.userdetails)
      this.firstname = this.userdetails.fname
      this.lastName = this.userdetails.lName
      this.mobile = this.userdetails.mobileNo
    })
  }
}
