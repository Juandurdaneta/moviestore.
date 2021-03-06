import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.scss'],
})
export class MovieThumbnailComponent implements OnInit {

  @Input() movie: Movie;
  @Input() clickable: boolean;


  constructor() { }

  ngOnInit() {}


}
