import { afterRender, Component } from '@angular/core';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { DataServicesService } from '../services/data-services.service';
import { PostersListComponent } from "../posters-list/posters-list.component";

@Component({
  selector: 'app-explore-movies',
  standalone: true,
  imports: [SearchFilterComponent, PostersListComponent],
  templateUrl: './explore-movies.component.html',
  styleUrl: './explore-movies.component.css'
})
export class ExploreMoviesComponent {
movies : any = []
type = "movie";
page = 1
  keyword: string = '';
  totalPages: any;
ngOnInit(): void{
  this.getALlData();
}
constructor(private data : DataServicesService){}
getData(data : any = ''){
  if(data == ''){
    this.movies = [];
    this.keyword = '';
    this.getALlData()
  }
  else {
    if (data !== this.keyword) {
      this.movies = [];
      this.page = 1;
    }
    this.keyword = data;
    this.data.MoviesSearch(data , this.page).subscribe((res)=>{
      this.totalPages = res.total_pages;
      this.movies.push(...res.results);
      this.movies = [...new Set(this.movies)];  })

    }
}
loadMore(){
this.page +=1;
if(this.keyword !== ''){
  this.getData(this.keyword);
}
else {
  this.getALlData();
}
}

getALlData(){
  this.data.getMoives(this.page).subscribe((res)=>{
this.totalPages = res.total_pages;
    this.movies.push(...res.results);
    this.movies = [...new Set(this.movies)];  })
}

}
