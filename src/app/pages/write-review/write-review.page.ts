import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';


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
    private userService: UserService,
    private toastController : ToastController

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
      rating: [null, [Validators.min(1), Validators.max(10)]]
    })

  }



  async publish(movieId, userId){
    console.log("loading...")
    let myForm: FormData = new FormData();
    myForm.append("movieId", movieId)
    myForm.append("userId", userId)
    myForm.append("comment", this.reviewForm.get('comment').value)
    myForm.append("rating", this.reviewForm.get('rating').value)
  
    this.reviewService.postReview(myForm)
    .subscribe(
      async(res)=>{

        this.presentToast(res.message, res.status)


        if(res.status == 200){

          this.reviewForm.controls['comment'].setValue('');
          this.reviewForm.controls['rating'].setValue('');


        }
      }
    )
  }

  getUserId(){
    this.userService.getUser()
    .subscribe(
      async(res)=>{
        this.userId = res.userId;
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
