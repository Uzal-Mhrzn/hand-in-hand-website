import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://hq56d6ir59.execute-api.us-east-1.amazonaws.com/dev'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getRecentNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news`);
  }

  getUpcomingEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events?active=true`);
  }

  getUpcomingEventImages(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/${id}/albums`);
  }

  getAboutUs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aboutus`);
  }

  getContactUs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contactus`);
  }

  getOfficiers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/officers`);
  }
}
