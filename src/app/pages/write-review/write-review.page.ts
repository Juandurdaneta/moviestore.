import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.page.html',
  styleUrls: ['./write-review.page.scss'],
})
export class WriteReviewPage implements OnInit {

  // reviewForm = this.formBuilder.group({
  //   comment: '',
  //   calification: '',
  //   userId: '',
  //   movieId: ''
  // })

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movieId'));


  }





}
