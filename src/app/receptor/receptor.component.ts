import { Component } from '@angular/core';
import { PubsubService } from '../pubsub.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent {

  data:number = 0
  constructor(private readonly pubsub:PubsubService){
    this.pubsub.observable.subscribe(data=>this.data=data)
    
    window.addEventListener("carrito", (ev)=>{
      const custom = ev as CustomEvent
      custom.stopPropagation();
      console.log(custom.detail)
    })
  }

}
