import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url = 'http://192.168.1.9:3001';
  login = '/login';
  category = '/categories';
  movies = '/movies';
  seat = '/seatdetail';
  show = '/show';
  events = '/events';
  play = '/play';
  constructor(private http: HttpClient) { }

  getDataLogin() {
    return this.http.get(`${this.url}${this.login}`);
  }

  getCategory() {
    return this.http.get(`${this.url}${this.category}`);
  }

  getMoviesData() {
    return this.http.get(`${this.url}${this.movies}`);
  }
  getEventData() {
    return this.http.get(`${this.url}${this.events}`);
  }
  getPlayData() {
    return this.http.get(`${this.url}${this.play}`);
  }
  getSeatData() {
    return this.http.get(`${this.url}${this.seat}`);
  }

  getShowData() {
    return this.http.get(`${this.url}${this.show}`);
  }
}
