import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doc, RootObject } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_KEY = 'xDgMAhzQV1pf0klr5wIjkDanmC1H6r3u';
  private getProducts = 'https://fakestoreapi.com/products';
  private getBlogs = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(%22Fashion%22)&api-key=${this.API_KEY}`;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.getProducts);
  }

  getAllBlogs(): Observable<RootObject> {
    return this.http.get<RootObject>(this.getBlogs);
  }

  getSingleBlog(id: string): Observable<RootObject> {
    return this.http.get<RootObject>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xDgMAhzQV1pf0klr5wIjkDanmC1H6r3u&fq=_id:(%22${id}%22)`
    );
  }
}
