import { Component } from '@angular/core';
import { movies } from '../movies';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor() {}

  movies = movies

}
