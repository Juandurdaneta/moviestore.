import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if(this.authService.isAuthenticated){
      this.getUserInfo()
    } else {
      this.router.navigate(['login'])
    }

  }

  
  getUserInfo(){
    this.userService.getUser()
    .subscribe(
      async(res) => {
        this.user = res
        console.log(this.user)
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
