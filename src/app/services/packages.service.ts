import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.urlApi}/packages`);
  }

  history(data) {
    return this.http.get(
      `${environment.urlApiPakke}/Shipments/${data}/history`,
      { headers: new HttpHeaders().set('Authorization', environment.PakkeAuthorization) }
    );
  }

}