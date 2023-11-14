import { Injectable } from '@angular/core';
import { ISpinner } from './ispinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerdecoratorService {

  constructor() { }

  static spinner(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
      const oldFunction = descriptor.value
      descriptor.value = async function(...args:[]){
          const spinner = this as ISpinner
          spinner.spinner.on();
          const result  = await oldFunction.apply(this,args)
          spinner.spinner.off();
          return result;
      }
    }
  }
}
