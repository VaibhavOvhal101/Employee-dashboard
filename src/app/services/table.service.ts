import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/Users'
  users() {
    return this.http.get(this.url)
  }
  // url2: string = 'http://localhost:3000/Users'
  // empList() {
  //   return this.http.get(this.url2)
  // }
}
