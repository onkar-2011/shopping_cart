import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // loginUser(item:any) {
  //   console.warn(item);
  // }

  loginUser(f: NgForm) {
    f.form.markAllAsTouched();
    if (f.invalid) {
      return;
    }
    this.LoginService.getLogin(f).subscribe(
      (res: any) => {
        if (res.status) {
          this.router.navigate(["/dashboard/user"]);
        }
        else {
          alert(res.Data.Errors[0])
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
