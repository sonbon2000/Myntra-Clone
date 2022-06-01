import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  
  constructor(private mockService: MockService) {}

  ngOnInit(): void {}
=======
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
>>>>>>> master
}
