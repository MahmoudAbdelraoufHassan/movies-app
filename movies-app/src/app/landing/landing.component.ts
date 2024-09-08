import { DataServicesService } from './../services/data-services.service';
import { SliderService } from './../services/slider.service';
import { DatePipe, DecimalPipe, NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LandingSliderComponent } from '../landing-slider/landing-slider.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgStyle , DatePipe ,DecimalPipe, LandingSliderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingComponent {
  image : string = `https://image.tmdb.org/t/p/original/`;
  backdrop ?: string;
  title ?: string;
  overview ?: string;
  popularMovies ?: any;
  ratedMovies ?: any;
  ratedTvSeries ?: any;
  popularTvSeries ?: any;
  constructor(private slide : SliderService , private data :  DataServicesService ){}
  ngOnInit(): void {
    this.slide.getSliderValue().subscribe(item =>{
      let result = JSON.parse(item)
      this.backdrop = result.backdrop_path;
      this.title = result.original_title;
      this.overview = result.overview.length > 200 ? result.overview.substring(0 , 200) + "..." : result.overview
    } );
    this.data.getPopularMoives().subscribe(result => {
      this.popularMovies = result.results;
    })
    this.data.getRatedMoives().subscribe(result => {
      this.ratedMovies = result.results;
    })
    this.data.getRatedTvSeries().subscribe(result => {
      this.ratedTvSeries = result.results;
    })
    this.data.getPopularTvSeries().subscribe(result => {
      this.popularTvSeries = result.results;
    })
  }
}


