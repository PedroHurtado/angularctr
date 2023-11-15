import { Component } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { ISpinner } from '../ispinner';
import { SpinnerdecoratorService } from '../spinnerdecorator.service';
import { GetgenericdataService } from '../getgenericdata.service';
import { Customer } from '../customer';

@Component({  
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css'],
  providers:[
      SpinnerService,
      GetgenericdataService<Customer>,
      {provide:"path", useValue:'https://symmetrical-invention-xrq94p5gr5hw6g-8080.app.github.dev/customer.json'}
      
  ]
})
export class GetdataComponent implements ISpinner {
   constructor(
        private readonly _spinner:SpinnerService,
        private readonly service:GetgenericdataService<Customer>
    ){
     this._spinner.observable.subscribe(value=>console.log(value))     
   }
  get spinner(): SpinnerService {
    return this._spinner
  }

  @SpinnerdecoratorService.spinner()
  async write(){
    const customer = await this.service.get();
    console.log(customer)
  }
}
