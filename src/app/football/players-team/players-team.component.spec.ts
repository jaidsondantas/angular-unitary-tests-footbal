import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayersTeamComponent} from './players-team.component';
import {MockComponent} from 'ng-mocks';
import {PlayerCardComponent} from './player-card/player-card.component';

describe('PlayersTeamComponent', () => {
  let component: PlayersTeamComponent;
  let fixture: ComponentFixture<PlayersTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersTeamComponent, MockComponent(PlayerCardComponent)]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PlayersTeamComponent);
        component = fixture.componentInstance;
      })
  });

  it('should create', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
