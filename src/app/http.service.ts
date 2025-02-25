import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://api.example.com'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getRecentNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news`);
  }

  getUpcomingEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }
}
