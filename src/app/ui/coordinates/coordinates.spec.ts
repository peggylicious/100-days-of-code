import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coordinates } from './coordinates';

describe('Coordinates', () => {
  let component: Coordinates;
  let fixture: ComponentFixture<Coordinates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coordinates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coordinates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
