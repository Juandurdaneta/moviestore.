import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movies } from 'src/app/movies';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  genre: String | undefined;
  moviesBySelectedGenre: Array<Movie> | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.genre = routeParams.get('genre');
    
    this.genre = this.genre.charAt(0).toUpperCase() + this.genre.slice(1) 

    this.moviesBySelectedGenre = movies.filter((movie)=>{
      return []
    })

    console.log(this.moviesBySelectedGenre)

  

  }

}
