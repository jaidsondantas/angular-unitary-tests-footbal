import {getTestBed, TestBed} from '@angular/core/testing';

import {FootballService} from './football.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {RES_TOP_PLAYER} from '../../shared/constants/mock';

describe('FootballService', () => {
  const team = 5981;
  const tournament = 325;
  const season = 36166;

  let injector: TestBed;
  let service: FootballService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  jest.useFakeTimers();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: []
    }).compileComponents()
      .then(() => {
        injector = getTestBed();
        httpClient = injector.get(HttpClient);
        httpMock = injector.get(HttpTestingController);
        service = injector.get(FootballService);
      })
    service = TestBed.inject(FootballService);
  });

  it('should be created service', () => {
    service = new FootballService(httpClient);
    expect(service).toBeTruthy();
  });

  it('should request is not null', done => {
    service = new FootballService(httpClient);

    service.getTopPlayers(team, tournament, season).subscribe(
      res => {
        expect(res).not.toBeNull();
        done();
      }
    );

    const reqMock = httpMock.expectOne((req) => {
      return req.method === 'GET' &&
        req.urlWithParams === `${environment.urlSofaScore}team/${team}/unique-tournament/${tournament}/season/${season}/top-players/overall`
    });

    reqMock.flush(RES_TOP_PLAYER);
    httpMock.verify();
  });

  it('should request fail', done => {
    service = new FootballService(httpClient);

    service.getTopPlayers(team, tournament, season).subscribe(
      res => {
        expect(res).toEqual({status: 400})
        done();
      }
    );

    const reqMock = httpMock.expectOne((req) => {
      return req.method === 'GET' &&
        req.urlWithParams === `${environment.urlSofaScore}team/${team}/unique-tournament/${tournament}/season/${season}/top-players/overall`
    });

    reqMock.flush({status: 400});
    httpMock.verify();
  });
});
