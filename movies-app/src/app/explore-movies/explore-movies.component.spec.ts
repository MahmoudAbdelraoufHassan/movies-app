import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMoviesComponent } from './explore-movies.component';

describe('ExploreMoviesComponent', () => {
  let component: ExploreMoviesComponent;
  let fixture: ComponentFixture<ExploreMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
