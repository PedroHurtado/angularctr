import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubsubService {

  private subject = new Subject<number>()
  constructor() { }

  emit(value:number){
    this.subject.next(value)
  }

  get observable():Observable<number>{
    return this.subject.asObservable()
  }
}
