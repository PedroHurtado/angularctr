import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetgenericdataService<T> {

  constructor(
    @Inject("path") private readonly path:string,
    private readonly http:HttpClient
  ) { }

  get():Promise<T>{
     return lastValueFrom(this.http.get<T>(this.path))
  }
}
