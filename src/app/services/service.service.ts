import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public notificationSubject = new BehaviorSubject('')
  public userDataSubject = new BehaviorSubject('')

  constructor() {}
  sendNotification(data: any) {
    this.notificationSubject.next(data)
    console.log('service:-', data)
  }
  sendUsrData(data: any) {
    this.userDataSubject.next(data)
    console.log('user data in service', data)
  }
}
