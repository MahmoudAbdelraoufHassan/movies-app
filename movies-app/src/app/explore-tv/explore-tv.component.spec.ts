import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTvComponent } from './explore-tv.component';

describe('ExploreTvComponent', () => {
  let component: ExploreTvComponent;
  let fixture: ComponentFixture<ExploreTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreTvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
