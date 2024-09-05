import { DataServicesService } from './services/data-services.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from "./landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild ('test') test !: ElementRef
  title = 'movies-app';
  result : any;
  constructor(private DataServices : DataServicesService , ele : ElementRef){}
  observer = {
    next : (value : any)=> console.log(value) ,
    error : (error : any)=> console.error(error) ,
    complete : ()=> console.log('Observer complete')
  }

  ngOnInit(): void {
    this.result = this.DataServices.getMovies().subscribe(this.observer);
  }
  
}
