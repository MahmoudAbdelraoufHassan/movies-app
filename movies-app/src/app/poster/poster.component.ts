import { DecimalPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [NgClass , DecimalPipe ],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.css'
})
export class PosterComponent {
  constructor(private router : Router){}
  loading: boolean = false;
  @Input() arr : boolean[] = [];
  @Input() Index !: number;
  @Input() movie : any;
 observe!: IntersectionObserver;
 @Input() type !: string;
 image : string = `https://image.tmdb.org/t/p/w500/`;
 ngOnInit(): void {
 }
   loaded(index : number , box :any , img : any) {
     let intervalId: any = null; // Store interval ID
       this.observe = new IntersectionObserver((entries)=>{
         entries.forEach(entry =>{
         if(entry.isIntersecting && !intervalId){
           intervalId = setInterval(() => {
             this.arr[index] = true;
           },  500);
         } else if (!entry.isIntersecting && intervalId) {
           clearInterval(intervalId);
           intervalId = null;
         }

       })
     } , {
       threshold: 0.5
     })
     this.observe.observe(box);
   }

   redirectMovie(id : any){
     if(this.type === "movie"){
       this.router.navigate([ `${this.type}`, id])
     }
     else if(this.type === "tv"){
       this.router.navigate([ this.type, id])
     }
   }
}
