import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get(`${this.url}/packages`);
  }

}