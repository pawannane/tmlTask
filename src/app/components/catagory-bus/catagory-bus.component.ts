import { Component, OnInit } from '@angular/core';


export interface busclass {
  value: string;
  viewValue: string;
}

export interface bus {
  value: string;
  viewValue: string;
}

export interface driverselected {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-catagory-bus',
  templateUrl: './catagory-bus.component.html',
  styleUrls: ['./catagory-bus.component.scss']
})
export class CatagoryBusComponent implements OnInit {
  selectedValue: string;
  selectedbus: string;
  selecteddriver: string;



  panelOpenState = false;
  buses: busclass[] = [
    {value: 'seater ac', viewValue: 'seater ac'},
    {value: 'seater non ac', viewValue: 'seater non ac'}
  ];

  busesselected: bus[] = [
    {value: 'test', viewValue: 'test'}

  ];
  driverselected: driverselected[] = [
    {value: 'test', viewValue: 'test'}

  ];


  constructor() { }

  ngOnInit() {
  }
  onbusclassselect(event){
    console.log(event.target.selectedValue);
   }
   onbusselect(){
    console.log(this.selectedbus)
   }
   ondriverselect(){
    console.log(this.selecteddriver)
  }


}
