import { Component } from '@angular/core';
import { PubsubService } from '../pubsub.service';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  constructor(private readonly pubsub:PubsubService){}
  handlerClick(event:Event){

    event.stopPropagation();
    
    this.pubsub.emit(10)

    const ev:CustomEvent = new CustomEvent("emit",{
      composed:true,
      cancelable:true,
      bubbles:true,
      detail:10
    })
    window.dispatchEvent(ev)

  }
}
