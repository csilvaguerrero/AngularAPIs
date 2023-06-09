import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula';
import { Observable } from 'rxjs';
//PRUEBA

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(private http: HttpClient) { }

  getLista(url: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(url);
  }
}
