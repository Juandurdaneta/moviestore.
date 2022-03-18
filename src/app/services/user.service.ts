import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = 'http://127.0.0.1:4000/users'

  constructor(
    private http: HttpClient
  ) { }


    getUser(): Observable<any>{
      return this.http.get(`${this.baseUrl}`, this.userHeader() )
    }

    userHeader(){
      var header = {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${localStorage.getItem('TOKEN')}`)
      }

      return header;
    }

}