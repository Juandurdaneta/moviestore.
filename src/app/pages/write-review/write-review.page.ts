import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.page.html',
  styleUrls: ['./write-review.page.scss'],
})
export class WriteReviewPage implements OnInit {
  reviewForm: FormGroup;
  movieIdFromRoute: Number;
  userId: Number;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router, 
    private formBuilder: FormBuilder,
    private userService: UserService

  ) { }

  ngOnInit() {

    if(!this.authService.isAuthenticated){
      this.router.navigate(['login'])
    }

    const routeParams = this.route.snapshot.paramMap;
    this.movieIdFromRoute = Number(routeParams.get('movieId'));

    this.getUserId();

    this.reviewForm = this.formBuilder.group({
      comment: [null, [Validators.required]],
      calification: [null, [Validators.min(1), Validators.max(10)]]
    })

  }



  publish(movieId, userId){
    console.log(movieId, userId)
  }

  getUserId(){
    this.userService.getUser()
    .subscribe(
      async(res)=>{
        this.userId = res.userId;
      }
    )
  }


}
