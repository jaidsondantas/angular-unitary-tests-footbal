import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FootballComponent} from './football.component';
import {MockComponent} from 'ng-mocks';
import {PlayersTeamComponent} from './players-team/players-team.component';
import {FootballService} from './football.service';
import {Observable} from 'rxjs';
import {PLAYERS, RES_TOP_PLAYER} from '../../shared/constants/mock';

class MockSpotifyService {
  getTopPlayers(): Observable<any> | null {
    return null;
  }
}

describe('FootballComponent', () => {
  let component: FootballComponent;
  let fixture: ComponentFixture<FootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootballComponent, MockComponent(PlayersTeamComponent)],
      providers: [
        {provide: FootballService, useClass: MockSpotifyService}
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FootballComponent);
        component = fixture.componentInstance;
      })
  });

  it('should create component', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should team have value', () => {
    const app = fixture.componentInstance;
    expect(app.team).not.toBeNull();
    expect(app.team).not.toBeUndefined();
  });

  it('should init players empty', () => {
    const app = fixture.componentInstance;
    expect(app.players.length).toEqual(0);
  });

  it('should length players array', () => {
    const app = fixture.componentInstance;
    expect(app.initPlayers(RES_TOP_PLAYER)).not.toHaveLength(0);
  });

  it('should length players array has name Andreas Pereira', () => {
    const app = fixture.componentInstance;
    expect(app.initPlayers(RES_TOP_PLAYER)).toEqual(expect.arrayContaining(PLAYERS))
  });

});
