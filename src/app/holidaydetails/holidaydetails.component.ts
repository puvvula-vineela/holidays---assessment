import { Component, OnInit } from '@angular/core';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
@Component({
  selector: 'app-holidaydetails',
  templateUrl: './holidaydetails.component.html',
  styleUrls: ['./holidaydetails.component.css']
})
export class HolidaydetailsComponent implements OnInit {
  hname: string;
  date: string;
  public: string;
  constructor(route: ActivatedRoute) {
    debugger;
    let name = route.snapshot.params['id'];
    let data = JSON.parse(localStorage.getItem("data"));
    let result = this.search(name, data);
    this.hname = result.name;
    this.date = result.date;
    this.public = result.public ? 'Yes' : 'No';
    console.log(result);

  }

  ngOnInit() {
  }
  search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  }
}
