import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  headers: any;

  constructor(
    private http: HttpClient
  ) {
    this.headers = {};
  }

  getTopPlayers(team: number, tournament: number, season: number): Observable<any> {
    return this.http.get(`${environment.urlSofaScore}team/${team}/unique-tournament/${tournament}/season/${season}/top-players/overall`);
  }

}
