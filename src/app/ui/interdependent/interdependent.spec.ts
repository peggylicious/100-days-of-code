import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interdependent } from './interdependent';

describe('Interdependent', () => {
  let component: Interdependent;
  let fixture: ComponentFixture<Interdependent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interdependent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interdependent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
