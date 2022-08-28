import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BuscategoryService } from 'src/app/services/buscategory.service';


export interface PeriodicElement {
  Stoppage: string;
  Time: string;
  Stoppage2: number;
  cost: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Stoppage: 'Lonavala', Time: '05:30', Stoppage2: 54, cost: '0'},
  {Stoppage: 'Karad', Time: '05:30', Stoppage2: 32, cost: '0'},
  {Stoppage: 'Pune', Time: '05:30', Stoppage2: 20, cost: '0'},
  {Stoppage: 'Chiplun', Time: '05:30', Stoppage2: 20, cost: '0'},
  {Stoppage: 'Ratnagiri', Time: '05:30', Stoppage2: 20, cost: '0'},
  {Stoppage: 'Mumbai', Time: '05:30', Stoppage2: 21, cost: '0'},
  {Stoppage: 'Goa', Time: '05:30', Stoppage2: 24, cost: '0'},
];

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  bookingForm : FormGroup;
  getBookingTime : any;

   priorDates: any[]=[
    {noOfDays: "15 days prior", value:"15 days prior"},
    {noOfDays: "30 days prior", value:"30 days prior"},
    {noOfDays: "45 days prior", value:"45 days prior"},
    {noOfDays: "Anytime", value:"Anytime"}
  ]
  
  constructor(public fb: FormBuilder, public busServices: BuscategoryService) { }

  ngOnInit() {
    this.displayBookingTime();

    this.bookingForm = this.fb.group({
      pricing: ['', [Validators.required,Validators.maxLength(5)]],
      bookingTime: ['', Validators.required],
      platform: ['', Validators.required]
    });
  }

  displayBookingTime(){
    this.busServices.getBookingTime().subscribe((res: any)=>{
      this.getBookingTime = res;
      console.log(this.getBookingTime);
    })
  }

  get Pricing(): FormControl{
    return this.bookingForm.get('pricing') as FormControl;
  }
}
