import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  em=new EventEmitter();
  constructor() { }
}
