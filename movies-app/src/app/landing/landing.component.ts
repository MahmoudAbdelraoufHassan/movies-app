import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingComponent {
  @ViewChild('swiper') swiper !: ElementRef;
constructor(private el : ElementRef){}
  ngAfterViewInit(): void {
    let swipEl = this.el.nativeElement.querySelector('.swiper');
    const swiperParams = {
      loop : true,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
    Object.assign(swipEl, swiperParams);
  }
  }


