import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {
name: any;
arr : any  = [];
@Output() movies = new EventEmitter();
@Output() data = new EventEmitter();

search(){
this.movies.emit(this.arr);
  this.data.emit(this.name);
}
}
