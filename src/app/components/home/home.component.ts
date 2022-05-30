import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/shared/services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor(private mockService: MockService) {}

  ngOnInit(): void {}
}
