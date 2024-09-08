import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private data: Subject<any> = new Subject<any>;

  setSliderValue(value: any): void {
    this.data.next(value);
  }

  getSliderValue() {
    return this.data.asObservable();

  }
  constructor() { }


}
