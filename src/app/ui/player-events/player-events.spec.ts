import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEvents } from './player-events';

describe('PlayerEvents', () => {
  let component: PlayerEvents;
  let fixture: ComponentFixture<PlayerEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
