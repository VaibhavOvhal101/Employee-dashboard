import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmpTableService {
  constructor(private http: HttpClient) { }
  url1: string = 'http://localhost:3000/Users'

  employee() {
    return this.http.get(this.url1)
  }

  update(id, employeeData) {
    console.log(id);
    console.log(employeeData);
    return this.http.put(`${this.url1}/${id}`, employeeData)
  }

  delete(id) {
    return this.http.delete(`${this.url1}/${id}`)
  }


}
