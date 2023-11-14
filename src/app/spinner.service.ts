import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private subject = new Subject<boolean>()

  constructor() {
    console.log("spinner service")
  }

  on(){
    this.subject.next(true)
  }
  off(){
    this.subject.next(false)
  }

  get observable():Observable<boolean>{
     return this.subject.asObservable()
  }
}
