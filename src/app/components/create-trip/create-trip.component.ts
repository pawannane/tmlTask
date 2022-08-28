import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  bookingFormGroup: FormGroup;

  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.bookingFormGroup = this._formBuilder.group({
      pricing: ['', Validators.required],
      bookingTime: ['', Validators.required],

      platform: ['', Validators.required]
    });
  }

  get Pricing(): FormControl{
    return this.bookingFormGroup.get('pricing') as FormControl;
  }
}
