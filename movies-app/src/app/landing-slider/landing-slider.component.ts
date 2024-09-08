import { SliderService } from './../services/slider.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-landing-slider',
  standalone: true,
  imports: [],
  templateUrl: './landing-slider.component.html',
  styleUrl: './landing-slider.component.css' ,
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingSliderComponent {
  image : string = `https://image.tmdb.org/t/p/w500/`;
  result : any;
  id : any;
  test : any;

constructor(private data : DataServicesService ,private slide : SliderService ,private ele : ElementRef){
}
ngAfterViewInit(): void {
let swiperEl = this.ele.nativeElement.querySelector('.swiper');
let firstSlide =  this.ele.nativeElement.querySelector('.swiper .swiper-slide-active')
  this.slide.setSliderValue(firstSlide.dataset.item);
// Event listener for swiper slide change transition start
swiperEl.addEventListener("swiperslidechangetransitionstart", ()=> {
        this.test = this.ele.nativeElement.querySelector('.swiper .swiper-slide-active');
        this.slide.setSliderValue(this.test.dataset.item);
} );

let swipPrams = {
  loop : true,
  mousewheel: {
    enabled: true,
    sensitivity: 2, // Adjust sensitivity value as needed
  },
}
Object.assign(swiperEl, swipPrams);

}
ngOnInit(): void {
  this.data.getMovies().subscribe((res: any) => {
    this.result = res.results;
  });
}
convertData(input : any) {
  return JSON.stringify(input);
}
}
