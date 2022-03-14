import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  genre: String | undefined;
  moviesBySelectedGenre: Array<Movie> | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.genre = routeParams.get('genre');
    
    this.genre = this.genre.charAt(0).toUpperCase() + this.genre.slice(1) 

    this.getMovies(this.genre)


  

  }

  getMovies(genre){
    this.movieService.getMoviesByGenre(genre)
    .subscribe(
      async (res) => {
        this.moviesBySelectedGenre = res.foundMovies
      },
      async (res) => {
        console.log(res.error)
      }
    )
  }

}
