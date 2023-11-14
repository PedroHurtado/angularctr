import { Component, HostListener } from '@angular/core';

function* getDays(){
  for(let i=0;i<31;i++){
    yield i+1
  }
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  days = [...getDays()]


  @HostListener('click', ['$event'])
  handlerClick(ev:Event){

    ev.stopPropagation();
    const node = ev.composedPath()
        .map(n=>n as HTMLElement)
        .find(n=>n.dataset && 'day' in n.dataset)

    if(node!=null){
      const {day} = node.dataset
      console.log(day)
    }
  }

}
