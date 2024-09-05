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
  
  getMovies() : Observable<any>{
   return  this.http.get(`${this.url}3/discover/movie` , {headers : {
    'Authorization':this.apiKey ,
    'Content-Type': 'application/json'
   }})
  }
}
