import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = 'https://api-moviestore.herokuapp.com/users'

  constructor(
    private http: HttpClient
  ) { }


    getUser(): Observable<any>{
      return this.http.get(`${this.baseUrl}`, this.userHeader() )
    }

    getUserById(userId: Number) : Observable<any>{
      return this.http.get(`${this.baseUrl}/${userId}` )
    }

    userHeader(){
      var header = {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${localStorage.getItem('TOKEN')}`)
      }

      return header;
    }

}
