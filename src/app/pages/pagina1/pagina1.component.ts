import { Component } from '@angular/core';
import { NostandaloneComponent } from '../nostandalone/nostandalone.component';

@Component({
  standalone:true,
  imports:[NostandaloneComponent],
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {

}
