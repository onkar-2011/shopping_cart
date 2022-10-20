import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient: HttpClient) { }

  registerUser(form: any) {
    let data1 = {
      UserName:form.name,
      UserEmail: form.email,
      UserPassword: form.password,
      UserDOB:form.dob,
      UserMobile:form.mob,
    }
    return this.httpclient.post("http://angular.pureecosoft.com/api/user/Registration", data1)
  }
}
