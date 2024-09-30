import { NgClass } from '@angular/common';
import { afterRender, Component, Input, input, Output ,EventEmitter, HostListener} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
safeUrl: any;
@Input() key !: string;
@Input() active  = false;
@Output() deactivate = new EventEmitter()

  constructor(private sanitizer : DomSanitizer){
  }

ngOnInit(): void {

   this.videoKey();
}


hidePopup() {
  this.active = false
  this.key = '';
  this.deactivate.emit(this.active)
  }

    videoKey() {
      const videoId = this.key;

}
    }
