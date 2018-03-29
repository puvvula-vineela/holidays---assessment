import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-holidayslist',
  templateUrl: './holidayslist.component.html',
  styleUrls: ['./holidayslist.component.css']
})
export class HolidayslistComponent implements OnInit {
  data: any[];

  constructor(private httpClient: HttpClient) {

    this.getholidsyList();
  }
  getholidsyList() {
    this.httpClient.get('https://holidayapi.com/v1/holidays?key=f216c2e3-9194-4b9c-beff-2dde3cdc8e3c&country=US&year=2016').subscribe((data) => {
      let dataArray = [];
      for (var i in data["holidays"]) {
        for (var k in data["holidays"][i]) {
          dataArray.push(data["holidays"][i][k])
        }


      }
      this.data = dataArray;
      localStorage.setItem("data",JSON.stringify(dataArray));
    })
  }
  ngOnInit() {
  }

}
