import { Component, ElementRef } from '@angular/core';
import { CoreModule } from 'core';


@Component({
  standalone:true,
  imports:[CoreModule],
  selector: 'app-root',   
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';
  constructor(private readonly element:ElementRef){
    
  }
  handlerClick(){
      this.element.nativeElement.style.setProperty('color', 'blue')
  }
}
