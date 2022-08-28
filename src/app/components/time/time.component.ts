import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  fromDate: any; 
  toDate: any; 
  week: any[] = [
  {weekId: 0, weekLabel: 'S',weekValue:'Sunday'},
  {weekId: 1, weekLabel: 'M',weekValue: 'Monday'},
  {weekId: 2, weekLabel: 'T',weekValue: 'Tuesday'},
  {weekId: 3, weekLabel: 'W',weekValue: 'Wednesday'},
  {weekId: 4, weekLabel: 'T',weekValue: 'Thursday'},
  {weekId: 5, weekLabel: 'F',weekValue: 'Friday'},
  {weekId: 6, weekLabel: 'S',weekValue: 'Saturday'},
  ];
 weekIndex = [];
 changeColor= [false, false, false, false, false, false, false];
  constructor() { }

  ngOnInit() {
  }

  selectedDay(index: any,week: any){
    // this.weekIndex.push(index);
    // this.changeColor[index]
    this.changeColor[index]=!this.changeColor[index]
    if(this.changeColor[index] === true){
      this.weekIndex.push(week);
    }else{
      this.weekIndex.forEach((element,index)=>{
        if(element.weekValue==week.weekValue) this.weekIndex.splice(index,1);
     });
    }
   
   
  }

  fromDateChangeHandler(e: any) {
    
  }
}
