import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup 

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }


  async login(){
    console.log('loading...')
    let myForm: FormData = new FormData();
    myForm.append("email", this.loginForm.get('email').value)
    myForm.append("password", this.loginForm.get('password').value)



    this.authService.login(myForm)
    .subscribe(
      async (res)=>{
        console.log(res)
      }
    )
  }



}
