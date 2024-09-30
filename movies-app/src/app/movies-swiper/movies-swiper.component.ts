import { Component , Input } from '@angular/core';
import { SwiperComponent } from '../swiper/swiper.component';
import { DataServicesService } from '../services/data-services.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-movies-swiper',
  standalone: true,
  imports: [SwiperComponent , NgClass ],
  templateUrl: './movies-swiper.component.html',
  styleUrl: './movies-swiper.component.css'
})
export class MoviesSwiperComponent {
  title = "Movies"
moviesList : any;
type = "movie";
active = 0;
arr :boolean[] =[]
constructor(private data : DataServicesService){}
ngOnInit(): void {
  this.changeTap(0)
}

getMovies(type : string){
this.data.getMovies(type).subscribe((res)=>{
this.moviesList = res.results;
})
}

changeTap(index : number){
const moviesTypes = ['popular' , 'top_rated' , 'upcoming'];
const movieType = moviesTypes[index];
this.getMovies(movieType)
}

activeBtn(index : number){
  this.arr= [];
  this.active = index;
  this.changeTap(index)
  }
}

