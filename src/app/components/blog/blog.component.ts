import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { Doc, RootObject } from 'src/app/shared/models/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogsArr: Doc[] = [];
  imageURL: string[] = [];

  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data: RootObject) => {
      this.blogsArr = data.response.docs;
      this.blogsArr.pop();
      for (let blog of this.blogsArr) {
        let multimedia = blog.multimedia;
        if (multimedia.length == 0) {
          this.imageURL.push(
            'https://assets.teenvogue.com/photos/5b3cead4cd6b096ecd587a3a/4:3/w_824,h_618,c_limit/how-to-be-a-fashion-blogger-keiko-lynn-tout.jpg'
          );
        } else {
          this.imageURL.push(`https://www.nytimes.com/` + multimedia[0].url);
        }
      }
      this.spinner.hide();
    });
  }
}
