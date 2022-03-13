import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  movies : Movie[]


  constructor(
    private movieService : MovieService
  ) {}



  ngOnInit(){
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovies()
    .subscribe(
      async(res) => {
        this.movies = res.foundMovies
      },
      async(res) =>{
        console.log(res.error)
      }
    )
  }

  doRefresh(event: any) {
    this.getAllMovies()
    event.target.complete();
  }


}
