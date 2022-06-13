import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Doc, RootObject } from 'src/app/shared/models/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  id: string = '';
  blog: Doc;
  image: string = '';
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      function backToTop() {
        window.scroll({ top: 50, left: 0, behavior: 'smooth' });
      }
      backToTop();
      this.id = params['id'];
      this.blogService.getSingleBlog(this.id).subscribe((res: RootObject) => {
        this.blog = res.response.docs[0];
        let multimedia = res.response.docs[0].multimedia;
        if (multimedia.length == 0) {
          this.image =
            'https://assets.teenvogue.com/photos/5b3cead4cd6b096ecd587a3a/4:3/w_824,h_618,c_limit/how-to-be-a-fashion-blogger-keiko-lynn-tout.jpg';
        } else {
          this.image = 'https://www.nytimes.com/' + multimedia[0].url;
        }
        this.spinner.hide();
      });
    });
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  onNavigate() {
    this.router.navigate(['/blog']);
  }
}
