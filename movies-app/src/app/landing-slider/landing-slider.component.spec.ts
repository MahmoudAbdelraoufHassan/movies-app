import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSliderComponent } from './landing-slider.component';

describe('LandingSliderComponent', () => {
  let component: LandingSliderComponent;
  let fixture: ComponentFixture<LandingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
