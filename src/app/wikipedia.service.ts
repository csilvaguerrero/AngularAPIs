import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Wiki } from './wiki';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }
  
  getWiki(url: string): Observable<Wiki[]> {
    return this.http.get<Wiki[]>(url);
  }
}
