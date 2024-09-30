import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { PostersListComponent } from '../posters-list/posters-list.component';
import { DataServicesService } from '../services/data-services.service';
@Component({
  selector: 'app-explore-tv',
  standalone: true,
  imports: [FormsModule , SearchFilterComponent , PostersListComponent],
  templateUrl: './explore-tv.component.html',
  styleUrl: './explore-tv.component.css'
})
export class ExploreTvComponent {
  tv : any = []
  type = "tv";
  page = 1
    keyword: string = '';
  totalPages: any;
  ngOnInit(): void{
    this.getALlData();
  }
  constructor(private data : DataServicesService){}
  getData(data : any = ''){
    if(data == ''){
      this.tv = [];
      this.keyword = '';
      this.getALlData();
    }
    else {
      if (data !== this.keyword) {
        this.tv = [];
        this.page = 1;
      }
      this.keyword = data;
      this.data.TvSearch(data , this.page).subscribe((res)=>{
        this.totalPages = res.total_pages;
        this.tv.push(...res.results);
        this.tv = [...new Set(this.tv)];
      })
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
    this.data.getTv(this.page).subscribe((res)=>{
      this.totalPages = res.total_pages;
      this.tv.push(...res.results);
      this.tv = [...new Set(this.tv)];
    })
  }

}
