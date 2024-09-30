import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tdbmovies } from '../interface/tdbmovies';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  url : string = "https://api.themoviedb.org/";
  apiKey : string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc2MTMzZmRiOTczZTNjMTgyZmQ1ODNmMDhkNmM4MSIsIm5iZiI6MTcyNTQ1Nzc4NC41MTA2NzUsInN1YiI6IjY2ZDg2MjA1MDA1ZDYyNGExMTZjZTZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gPGz1kUt9BDfzgwbaq487vWDSXmIRksQ2eC3wWovS9A';
  constructor( private http : HttpClient) {}

  getMovies(type : string) : Observable<any>{
   return  this.http.get(`${this.url}3/movie/${type}` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }
  getMovie(id : number) : Observable<any>{
   return  this.http.get(`${this.url}3/movie/${id}` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }
  getTvseries(id : number) : Observable<any>{
   return  this.http.get(`${this.url}3/tv/${id}` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }
  getMovieDetails(id : number , type : any) : Observable<any>{
   return  this.http.get(`${this.url}3/movie/${id}/${type}` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }

  getTvDetails(id : number , type : any) : Observable<any>{
   return  this.http.get(`${this.url}3/tv/${id}/${type}` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }

  getPopularMoives() : Observable<any>{
   return  this.http.get(`${this.url}3/movie/popular` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }

  getMoives(page : any) : Observable<any>{
   return  this.http.get(`${this.url}3/discover/movie` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   } ,
  params : {
    "page" : page
  }})
  }
  getTv(page : any) : Observable<any>{
   return  this.http.get(`${this.url}3/discover/tv` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   } ,
  params : {
    "page" : page
  }})
  }



  getPopularTvSeries() : Observable<any>{
    return  this.http.get(`${this.url}3/tv/popular` , {headers : {
     'Authorization':this.apiKey ,
     'Content-Type': 'application/json'
    }})
  }
  getTvSeries(type : string) : Observable<any>{
    return  this.http.get(`${this.url}3/tv/${type}` , {headers : {
     'Authorization':this.apiKey ,
     'Content-Type': 'application/json'
    }})
  }
  MoviesSearch(query : any , page : any = 1) : Observable<any>{
    return  this.http.get(`${this.url}3/search/movie` , {headers : {
     'Authorization':this.apiKey ,
     'Content-Type': 'application/json'
    },
  params : {
    "query" : query ,
    "page" : page
  }
})
}
  TvSearch(query : any , page : any = 1) : Observable<any>{
    return  this.http.get(`${this.url}3/search/tv` , {headers : {
     'Authorization':this.apiKey ,
     'Content-Type': 'application/json'
    },
  params : {
    "query" : query ,
    "page" : page
  }
})
}
}
