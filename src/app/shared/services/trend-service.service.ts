import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrendServiceService {
  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<any> {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(%22Fashion%22)&page=5&api-key=HMVGLbQohpNPdKGA686b441AebHST6BP`;
    return this.http.get(url);
  }
}
