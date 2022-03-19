import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: String = 'https://api-moviestore.herokuapp.com/movies'

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }

  getMovie(movieId: Number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${movieId}`)
  }

  getMoviesByGenre(genre: String): Observable<any>{
    return this.http.get(`${this.baseUrl}/genre/${genre}`)
  }

}
