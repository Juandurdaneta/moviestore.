import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = this.formBuilder.group({
    email: '',
    username: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {

    if(this.authService.isAuthenticated){
      this.router.navigate(['profile'])
    }

  }

  async register(){
    console.log("loading...")
    let myForm: FormData = new FormData();
    myForm.append("email", this.registerForm.get('email').value)
    myForm.append("username", this.registerForm.get('email').value)
    myForm.append("password", this.registerForm.get('password').value)

    this.authService.register(myForm)
    .subscribe(
      async(res)=>{

        this.presentToast(res.message, res.status)

        if(res.status == 200){
          this.registerForm.controls['email'].setValue('');
          this.registerForm.controls['username'].setValue('');
          this.registerForm.controls['password'].setValue('');  
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
