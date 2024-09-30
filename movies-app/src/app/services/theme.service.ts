import { Injectable } from '@angular/core';

type themMode = 'system' | 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
themeMode : themMode = 'system';
constructor() {}

setTheme(mode : themMode){
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)');
if(mode === 'dark'){
  document.body.classList.add('dark-theme');
  localStorage.setItem('theme' , mode);
}
else if(mode === 'system'){
  if(systemMode.matches){
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme' , 'dark')
  }
  else{
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme' , 'light')
  }
}
else {
  document.body.classList.remove('dark-theme');
  localStorage.setItem('theme' , mode);
}
}



}
