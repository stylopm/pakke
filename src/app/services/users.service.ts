import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }

  logout(data){
    return this.http.post(`${this.url}/Users/signup`, data);
  }

  login(data){
    return this.http.post(`${this.url}/Users/login`, data);
  }
}