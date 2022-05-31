import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doc, RootObject } from 'src/app/shared/models/blog.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  id: string = '';
  blog: Doc;
  image;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.productService
        .getSingleBlog(this.id)
        .subscribe((res: RootObject) => {
          this.blog = res.response.docs[0];
          let multimedia = res.response.docs[0].multimedia;
          if (multimedia.length == 0) {
            this.image =
              'https://assets.teenvogue.com/photos/5b3cead4cd6b096ecd587a3a/4:3/w_824,h_618,c_limit/how-to-be-a-fashion-blogger-keiko-lynn-tout.jpg';
          } else {

            // for (let i = 0; i < multimedia.length; i++) {
            //   this.image = 'https://www.nytimes.com/' + multimedia[i].url;
            //   break;
            // }
            this.image = 'https://www.nytimes.com/' + multimedia[0].url;

          }
        });
    });
  }

  onNavigate() {
    this.router.navigate(['/blog']);
  }
}
