import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies : Movie[]

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getAllMovies()
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
    console.log('refreshed')
    event.target.complete();
  }

}
