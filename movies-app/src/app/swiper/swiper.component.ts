import { AsyncPipe, DecimalPipe, JsonPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA , Input,EventEmitter, NO_ERRORS_SCHEMA, Output} from '@angular/core';
import {  Router } from '@angular/router';
import { PosterComponent } from '../poster/poster.component';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [DecimalPipe,NgFor,AsyncPipe,NgClass , PosterComponent ],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA ,  NO_ERRORS_SCHEMA]
})

export class SwiperComponent {
  interval:any;
  constructor(private router : Router){}
image : string = `https://image.tmdb.org/t/p/w500/`;
@Input() Title !: string;
@Input() swiperData : any;
@Input() type !: string;
@Output() activeTap = new EventEmitter()
@Input() arr : boolean[] = []
active = 0;
@Input() Data !: any;
ngOnInit(): void {
  this.activeTap.emit(this.active)
}


ngOnDestroy() {
}
}
