import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Musica } from './musica';

@Injectable({
  providedIn: 'root'
})
export class JamendoService {

  constructor(private http: HttpClient) { }
  
  getMusica(url: string): Observable<Musica[]> {
    return this.http.get<Musica[]>(url);
  }
}
