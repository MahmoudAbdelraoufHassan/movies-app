import { DataServicesService } from './services/data-services.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from "./landing/landing.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from "./footer/footer.component";
import { PosterComponent } from './poster/poster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,PosterComponent, MovieDetailsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
