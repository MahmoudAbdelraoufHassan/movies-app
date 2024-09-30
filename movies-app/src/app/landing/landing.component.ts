import { title } from 'node:process';
import { DataServicesService } from './../services/data-services.service';
import { SliderService } from './../services/slider.service';
import { NgFor, NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { SwiperComponent } from "../swiper/swiper.component";
import { MoviesSwiperComponent } from '../movies-swiper/movies-swiper.component';
import { TvseriesSwiperComponent } from '../tvseries-swiper/tvseries-swiper.component';
import { DomSanitizer } from '@angular/platform-browser';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgStyle,NgFor,MoviesSwiperComponent ,PopUpComponent,TvseriesSwiperComponent,SwiperComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})

export class LandingComponent {
  image : string = `https://image.tmdb.org/t/p/w500`;
  backdropImage : string = `https://image.tmdb.org/t/p/original`;
popularShows : any [] = []
  result: any;
  currrentIndex = 0;
  keyValue !: any;
  activeOverlay = false ;

moviesDetails : {
  title ?:string,
  id ?: any,
  key ?: string ,
  overview ?: string ,
  backdrop ?: string
}= {}
  firstSlide: any;
  trailer: any;
constructor(private ele : ElementRef , private data : DataServicesService , private sanitizer : DomSanitizer){}

ngOnInit(): void {
// fetch Data
this.result= this.data.getPopularMoives()
this.result.subscribe((res : any)=>{
res.results.filter((e : any)=>{
  if(res.results.indexOf(e) < 10 && e.backdrop_path){
    this.popularShows.push(e)
  }
})
this.firstSlide = this.popularShows[0];
this.moviesDetails.title = this.firstSlide.original_title || this.firstSlide.original_name
  this.moviesDetails.backdrop = this.firstSlide.backdrop_path;
  this.moviesDetails.id = this.firstSlide.id;
  this.moviesDetails.overview = this.firstSlide.overview.length > 200 ? this.firstSlide.overview.substring(0 , 200) + "..." : this.firstSlide.overview
})
}

  ngAfterViewInit(): void {
    let swiperEl = this.ele.nativeElement.querySelector('.swiper');
    let swipPrams = {
      loop : true,
    }
    Object.assign(swiperEl, swipPrams);
    }

onswiperSlide(){
let swiperActiveEle = this.ele.nativeElement.querySelector('.swiper .swiper-slide-active');
let ActiveSwiperIndex =swiperActiveEle.dataset.id
let ActiveSwiper = this.popularShows[ActiveSwiperIndex];
this.moviesDetails.id = ActiveSwiper.id;
this.moviesDetails.title = ActiveSwiper.original_title || ActiveSwiper.original_name
this.moviesDetails.backdrop = ActiveSwiper.backdrop_path
this.moviesDetails.overview = ActiveSwiper.overview.length > 200 ? ActiveSwiper.overview.substring(0 , 200) + "..." : ActiveSwiper.overview

}

changeValue(value : any){
  this.activeOverlay = value;
}
  getVideoKey(id : any){
    this.data.getMovieDetails( id  , 'videos').subscribe((res)=>{
      this.moviesDetails.key = res.results[0].key;
      })

  const unsafeUrl = `https://www.youtube.com/embed/${this.moviesDetails.key}`;
    this.keyValue =  this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);;
    this.activeOverlay = true;
    console.log(this.keyValue)
  }



  ngOnDestroy(): void {

  }
    }



