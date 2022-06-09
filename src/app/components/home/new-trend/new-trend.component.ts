import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrendServiceService } from '../../../shared/services/trend-service.service';

@Component({
  selector: 'app-new-trend',
  templateUrl: './new-trend.component.html',
  styleUrls: ['./new-trend.component.scss'],
})
export class NewTrendComponent implements OnInit {
  dataResponse: any;
  listImage: any[];
  listTitle!: string[];

  constructor(private newTrendService: TrendServiceService) {}

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(): void {
    this.newTrendService.getDataFromApi().subscribe(
      (res) => {
        this.dataResponse = res.response.docs.slice(0, 3);
      },
      (err) => {
        console.warn('Server Error');
      }
    );
  }
}
