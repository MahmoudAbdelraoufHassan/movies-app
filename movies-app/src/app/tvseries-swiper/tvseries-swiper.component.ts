import { Component, Input } from '@angular/core';
import { SwiperComponent } from '../swiper/swiper.component';
import { DataServicesService } from '../services/data-services.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tvseries-swiper',
  standalone: true,
  imports: [SwiperComponent , NgClass],
  templateUrl:'./tvseries-swiper.component.html',
  styleUrl: './tvseries-swiper.component.css'
})
export class TvseriesSwiperComponent {
  title = "Tv Series"
  tvSeriesList: any;
 type = "tv"
 arr : boolean[] = []
active = 0;

constructor(private data : DataServicesService){}

ngOnInit(): void {
this.changeTap(0)
}

  getTvseries(type : string){
    this.data.getTvSeries(type).subscribe((res)=>{
    this.tvSeriesList = res.results;
    })
    }

    changeTap(index : number){
    const SeriesTypes = ['popular' , 'top_rated' , 'on_the_air'];
    const series = SeriesTypes[index];
    this.getTvseries(series)
    }

    activeBtn(index : number){
      this.arr= [];
      this.active = index;
      this.changeTap(index);
      }

}
