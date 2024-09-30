import { ExploreTvComponent } from './explore-tv/explore-tv.component';
import { LandingComponent } from './landing/landing.component';
import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ExploreMoviesComponent } from './explore-movies/explore-movies.component';

export const routes: Routes = [
  {
    path : "" ,
    component : LandingComponent
  },
  {
    path : ":media_type/:id" ,
    component : MovieDetailsComponent ,
  } ,
{
  path : "Movies" ,
  component : ExploreMoviesComponent
},
{
  path : "Tv" ,
  component : ExploreTvComponent
}

];
