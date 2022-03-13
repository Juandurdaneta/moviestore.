import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get('http://127.0.0.1:4000/movies')
  }

  getMovie(movieId: Number): Observable<any>{
    return this.http.get(`http://127.0.0.1:4000/movies/${movieId}`)
  }

}
