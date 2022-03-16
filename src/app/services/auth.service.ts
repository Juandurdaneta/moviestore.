import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  login(formData: FormData): Observable<any>{
   
    return this.http.post<any>('http://127.0.0.1:4000/users/login', formData)
  }
}
