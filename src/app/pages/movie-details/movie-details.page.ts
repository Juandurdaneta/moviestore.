import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movies';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: Movie | undefined;
  isAuthenticated: boolean = false
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService
    ) { }

    
  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movieId'));

    this.isAuthenticated = this.authService.isAuthenticated

    console.log(this.isAuthenticated)

    this.getMovie(movieIdFromRoute)

  }


  getMovie(movieId){
    this.movieService.getMovie(movieId)
    .subscribe(
      async(res) => {
        this.movie = res.foundMovie
      },
      async(res) =>{
        console.log(res.error)
      }
    )
  }

}
