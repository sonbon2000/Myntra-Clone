import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrendServiceService } from './trend-service.service';

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
        console.log(this.dataResponse);
        // for (let res of this.dataResponse) {

        //   let multimedia = res.multimedia;
        //   if (multimedia.length == 0) {
        //     this.listImage.push(
        //       'https://assets.teenvogue.com/photos/5b3cead4cd6b096ecd587a3a/4:3/w_824,h_618,c_limit/how-to-be-a-fashion-blogger-keiko-lynn-tout.jpg'
        //     );
        //   } else {
        //     this.listImage.push(`https://www.nytimes.com/` + multimedia[0].url);
        //   }
        //   console.log(this.listImage);
        // }
        //this.listImage = this.dataResponse.docs;
        //this.title = this.dataResponse.docs?.headline?.main;
        // console.log('123', this.dataResponse);
      },
      (err) => {
        console.warn('Server Error');
      }
    );
  }
}
