import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Movie } from '../movies';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  movies : Movie[]


  constructor(
    private movieService : MovieService,
    private router: Router
  ) {
    
  }



  ngOnInit(){
  }

  getAllMovies(){
    this.movieService.getAllMovies()
    .subscribe(
      async(res) => {
        this.movies = res.foundMovies
        console.log(this.movies)

      },
      async(res) =>{
        console.log(res.error)
      }
    )
  }

  doRefresh(event: any) {
    this.getAllMovies()
    console.log('refreshed')
    event.target.complete();
  }


}
