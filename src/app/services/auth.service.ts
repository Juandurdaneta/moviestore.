import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: String = 'http://127.0.0.1:4000/users'
  token: string;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  constructor(
    private http: HttpClient
  ) { }


  login(formData: FormData): Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}/login`, formData)
  }

  register(formData: FormData): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`, formData)
  }

  storeToken(token: string){
    localStorage.setItem('TOKEN', token);
    this.token = token
    this.isAuthenticated.next(true)
  }

}
