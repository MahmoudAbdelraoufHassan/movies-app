import { Component, Input } from '@angular/core';
import { PosterComponent } from '../poster/poster.component';

@Component({
  selector: 'app-posters-list',
  standalone: true,
  imports: [PosterComponent],
  templateUrl: './posters-list.component.html',
  styleUrl: './posters-list.component.css'
})
export class PostersListComponent {
@Input() type !: string;
@Input() Data !: any;
@Input() keyword !: string;

}
