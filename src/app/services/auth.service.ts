import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: String = 'https://api-moviestore.herokuapp.com/users'
  token: string;
  isAuthenticated: boolean


  constructor(
    private http: HttpClient
  ) { 
    this.checkToken()
  }


  private checkToken() {
    this.token = localStorage.getItem('TOKEN')
    if (this.token && !this.tokenExpired(this.token)) {
      this.isAuthenticated = true
    } else {
      this.isAuthenticated = false
    }
  }


  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }


  login(formData: FormData): Observable<any>{
   
    return this.http.post<any>(`${this.baseUrl}/login`, formData)
  }

  register(formData: FormData): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`, formData)
  }

  storeToken(token: string){
    localStorage.setItem('TOKEN', token);
    this.token = token
    this.isAuthenticated = true

    console.log(this.isAuthenticated)
  }

}
