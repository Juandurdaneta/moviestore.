import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if(!this.authService.isAuthenticated){
      this.router.navigate(['login'])
    }

    this.getUserInfo()

  }

  getUserInfo(){
    this.userService.getUser()
    .subscribe(
      async(res) => {
        console.log(res)
      },
      async(res) =>{
        console.log(res.error)
      }
    
    )
  }

  doRefresh(event: any) {
    this.getUserInfo()
    event.target.complete();
  }



}
