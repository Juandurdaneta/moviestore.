import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl : String = 'https://api-moviestore.herokuapp.com/reviews';

  constructor(private http: HttpClient) { }

  getAllReviewsOfMovie(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  } 

  postReview(formData: FormData): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/`, formData)
  }


}
