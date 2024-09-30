import { NgClass } from '@angular/common';
import { afterNextRender, afterRender, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , NgClass , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isVisable = false
  isScrolled = false
  currentMode !: string;
  value ?: string
constructor(private theme : ThemeService ,   private cdref: ChangeDetectorRef){
afterNextRender(()=>{
  this.defultTheme();
})
}
  ngOnInit(): void {
  }
  @HostListener('window:scroll')
  hanndle(){
    if(window.scrollY > 100){
      this.isScrolled = true
    }
    else {
      this.isScrolled = false
    }
  }

getTheme(mode : 'system' | 'dark' | 'light'){
  this.theme.setTheme(mode);
  this.defultTheme()
}
defultTheme(){
const savdMode = localStorage.getItem('theme') as  'dark' | 'light';
this.theme.setTheme(savdMode)
if(savdMode === 'dark') {
  this.value = 'bx bx-moon'
}
else {
  this.value ='bx bx-sun'
}
this.cdref.detectChanges();

}

dropdown() {
this.isVisable = !this.isVisable
}
}
