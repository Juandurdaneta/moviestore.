import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup 

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController,
    private router : Router
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


        res.status !== 200 && this.presentToast(res.message, res.status)

        if(res.status == 200){
          this.authService.storeToken(res.token);
          this.router.navigateByUrl('/profile', {replaceUrl: true})
        }
       
        
      }
    )
  }


  async presentToast(message, status) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: status == 200 ? "success" : "danger"
    });
    toast.present();
  }


}
