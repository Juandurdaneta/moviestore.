import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/interfaces/review';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {

  @Input() review: Review
  author: User
  options: Object = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }

  releaseDateLocaleString : String


  constructor(private userService: UserService) { }

  ngOnInit() {

    this.releaseDateLocaleString = new Date(this.review.releaseDate).toLocaleDateString('en-US', this.options)

    this.getAuthor(this.review.userId);

    console.log(this.author)

  }

  getAuthor(userId){
    this.userService.getUserById(userId)
    .subscribe(
      async(res)=>{
        this.author = res.foundUser;
        console.log(this.author)
      }
    )
  }


}
