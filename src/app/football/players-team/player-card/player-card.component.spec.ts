import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerCardComponent} from './player-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {SharedModule} from '../../../../shared/shared.module';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDividerModule, SharedModule],
      declarations: [PlayerCardComponent]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PlayerCardComponent);
        component = fixture.componentInstance;
      })
  });

  it('should create player card', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
