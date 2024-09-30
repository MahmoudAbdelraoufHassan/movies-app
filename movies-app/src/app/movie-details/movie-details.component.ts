import { afterNextRender, afterRender, Component } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';
import { DatePipe, DecimalPipe, NgStyle } from '@angular/common';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ActivatedRoute } from '@angular/router';
import { SwiperComponent } from '../swiper/swiper.component';
import { unsubscribe } from 'diagnostics_channel';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgStyle ,PopUpComponent,SwiperComponent, DecimalPipe ,DatePipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  image : string = `https://image.tmdb.org/t/p/w500`;
backdropImage : string = `https://image.tmdb.org/t/p/original`;
res ?: any;
details: any;
director : any;
writers: any = [];
  cast: any;
  videos: any;
  keyValue !: any;
  activeOverlay = false ;
  showId: any;
  media_type : any;
  similar: any;
  detail: any;
img = 'imgs/user.png';
  safeUrl: any;
constructor(private data : DataServicesService,private sanitizer : DomSanitizer ,private activeRoute : ActivatedRoute){}
ngOnInit(): void {
  this.detail = this.activeRoute.params.subscribe(params => {
    this.showId = params["id"];
    this.media_type = params["media_type"];
    if (this.media_type === "movie") {
      this.getMovie(this.showId);
    } else {
      this.getTvseries(this.showId);
    }
  });
}
getMovie(id : any){
  this.data.getMovie(id).subscribe((res)=>{
    this.res = res
  })
  this.data.getMovieDetails(id ,'credits').subscribe((res)=>{
   this.director =  res.crew.find((e : any)=>{
     return e.job === "Director" ? e : ""
    })
     res.crew.filter((e : any)=>{
     return e.job === "Writer" ? this.writers.push(e.name): ""
    })
    this.cast = res.cast;
  })
  this.data.getMovieDetails(id , 'videos').subscribe((res)=>{
    this.videos = res.results;
    })
    this.data.getMovieDetails(id , 'similar').subscribe((res)=>{
      this.similar = res.results
    })
}


getTvseries(id : any){
  this.data.getTvSeries(id).subscribe((res)=>{
    this.res = res
  })
  this.data.getTvDetails(id ,'credits').subscribe((res)=>{
   this.director =  res.crew.find((e : any)=>{
     return e.job === "Director" ? e : e.known_for_department === "Directing"
    })
     res.crew.filter((e : any)=>{
     return e.job === "Writer" ? this.writers.push(e.name): ""
    })
    this.cast = res.cast;
  })
  this.data.getTvDetails(id , 'videos').subscribe((res)=>{
    this.videos = res.results;
    })
  this.data.getTvDetails(id , 'similar').subscribe((res)=>{
    this.similar = res.results;
    })
}


changeValue(value : any){
this.activeOverlay = value;
}

convertTime(item : any){
let hours = Math.floor( item / 60);
let minutes = item % 60;
return `${hours}h ${minutes}m`
}

getYoutubeImage(key : string) {
return `https://img.youtube.com/vi/${key}/mqdefault.jpg`
}

getVideoKey(key : string){
  const unsafeUrl = `https://www.youtube.com/embed/${key}`;
  this.keyValue =  this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);;
  this.activeOverlay = true
}

ngOnDestroy(): void {
this.detail.unsubscribe();
}

}

