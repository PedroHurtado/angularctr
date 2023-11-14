import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  private _day!:number;


  @Input()
  set day(value:number){
    this._day = value
  }
  get day(){
    return this._day;
  }


  constructor(){
    console.log("construtor")
  }
  ngOnInit(){
    console.log("on init")
  }

  /*ngOnChanges(changes :SimpleChanges){
    console.log(changes["day"])
  }*/

}
