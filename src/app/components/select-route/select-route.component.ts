import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-route',
  templateUrl: './select-route.component.html',
  styleUrls: ['./select-route.component.scss']
})
export class SelectRouteComponent implements OnInit {

  from = '';
  to = '';
  routeName: string;
  distance: number;
  stops: number;
  time: string;


  routes: any[] = [
    {
      routeName: "MUM-PUN",
      distance: 14,
      stops: 5,
      time: "3hrs 50Mins"
    }, {

      routeName: "MUM-PUN",
      distance: 14,
      stops: 5,
      time: "3hrs 50Mins"
    }, {
      routeName: "MUM-PUN",
      distance: 14,
      stops: 5,
      time: "3hrs 50Mins"
    }, {
      routeName: "MUM-PUN",
      distance: 14,
      stops: 5,
      time: "3hrs 50Mins"
    },{
      routeName: "MUM-PUN",
      distance: 14,
      stops: 5,
      time: "3hrs 50Mins"
    }

  ];

  view() {
    console.log(this.from, this.to)
  }

  popularRoutes() {
    console.log(this.popularRoutes)
  }


  constructor() { }

  ngOnInit() {
  }
}






