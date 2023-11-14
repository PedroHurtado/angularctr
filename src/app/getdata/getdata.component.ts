import { Component } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { ISpinner } from '../ispinner';
import { SpinnerdecoratorService } from '../spinnerdecorator.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css'],
  providers:[SpinnerService]
})
export class GetdataComponent implements ISpinner {
   constructor(private readonly _spinner:SpinnerService){
     this._spinner.observable.subscribe(value=>console.log(value))
   }
  get spinner(): SpinnerService {
    return this._spinner
  }

  @SpinnerdecoratorService.spinner()
  write(){
    console.log("getdata")
  }
}
