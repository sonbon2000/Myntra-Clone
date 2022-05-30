import { Component, OnInit } from '@angular/core';
import { Doc } from 'src/app/shared/models/blog.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogsArr: Doc[] = [];
  imageURL = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllBlogs().subscribe((data) => {
      this.blogsArr = data.response.docs;
      this.blogsArr.pop();
      for (let blog of this.blogsArr) {
        let multimedia = blog.multimedia;
        if (multimedia.length == 0) {
          this.imageURL.push(
            'https://assets.teenvogue.com/photos/5b3cead4cd6b096ecd587a3a/4:3/w_824,h_618,c_limit/how-to-be-a-fashion-blogger-keiko-lynn-tout.jpg'
          );
        } else {
          for (let i = 0; i < multimedia.length; i++) {
            this.imageURL.push(`https://www.nytimes.com/` + multimedia[i].url);
            break;
          }
        }
      }
    });
  }
}
