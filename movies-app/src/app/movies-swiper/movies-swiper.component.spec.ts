import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSwiperComponent } from './movies-swiper.component';

describe('MoviesSwiperComponent', () => {
  let component: MoviesSwiperComponent;
  let fixture: ComponentFixture<MoviesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
