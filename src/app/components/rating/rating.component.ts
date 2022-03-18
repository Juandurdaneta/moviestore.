import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/interfaces/review';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() reviews : Review[]
  score: number;

  constructor() { }

  ngOnInit() {

    if(this.reviews){
      this.calculateRating(this.reviews)
    }


  }

  async calculateRating(reviews: Review[]) {
    let totalScore = reviews.reduce((sum, review) => sum + review.rating, 0  );
    totalScore = totalScore / reviews.length

    this.score = totalScore
    console.log(this.score)

  }

}
