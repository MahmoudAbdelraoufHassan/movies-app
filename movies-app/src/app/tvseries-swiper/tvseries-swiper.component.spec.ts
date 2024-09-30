import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesSwiperComponent } from './tvseries-swiper.component';

describe('TvseriesSwiperComponent', () => {
  let component: TvseriesSwiperComponent;
  let fixture: ComponentFixture<TvseriesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvseriesSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvseriesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
