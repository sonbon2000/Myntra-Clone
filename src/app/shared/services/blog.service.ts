import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { RootObject } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private API_KEY = '0kvVtWM9vMApQ2vcby0Q9UBhAEV8HmOp';
  private getBlogs = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(%22Fashion%22)&api-key=${this.API_KEY}`;
  private blogAPI: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {}

  getAllBlogs(): Observable<RootObject> {
    this.spinner.show();
    return this.http.get<RootObject>(this.getBlogs);
  }

  getSingleBlog(id: string): Observable<RootObject> {
    this.spinner.show();
    return this.http.get<RootObject>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xDgMAhzQV1pf0klr5wIjkDanmC1H6r3u&fq=_id:(%22${id}%22)`
    );
  }
}
