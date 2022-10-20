import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }


  getLogin(form: any) {
    let data = {
      UserEmail: form.value.name,
      UserPassword: form.value.password
    }

    return this.httpclient.post("http://angular.pureecosoft.com/api/user/Login", data)
  }


 // rootUrl = "http://angular.pureecosoft.com/api/user/Login"
  
}
