import {Component, OnInit} from '@angular/core';
import {FootballService} from './football.service';
import {Player} from '../../shared/models/player.model';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {

  team = 5981;
  tournament = 325;
  season = 36166;

  players: Player[] = [];

  constructor(
    private footballService: FootballService
  ) {
  }

  ngOnInit(): void {
    this.footballService.getTopPlayers(this.team, this.tournament, this.season).subscribe(res => {
      this.initPlayers(res);
    }, error => {
      console.log(error);
    });
  }

  initPlayers(res: any): Player[] {
    this.players = res?.topPlayers.rating.map((r: any) => {
      let player: Player;
      player = {
        ...r.player,
        rating: r.statistics.rating.toFixed(1),
        name: r.player.name.split(' ').slice(-1).join(' '),
        goals: this.getValueStatistics(res, r.player.id, 'goals'),
        assists: this.getValueStatistics(res, r.player.id, 'assists'),
        interceptions: this.getValueStatistics(res, r.player.id, 'interceptions'),
        accuratePasses: this.getValueStatistics(res, r.player.id, 'accuratePasses'),
        keyPasses: this.getValueStatistics(res, r.player.id, 'keyPasses'),
        totalShots: this.getValueStatistics(res, r.player.id, 'totalShots'),
      }
      return player;
    })
    return this.players;
  }

  getValueStatistics(res: any, id: number, attribute: string): number {
    return res?.topPlayers?.[`${attribute}`].filter((g: any) => g.player.id === id)[0]?.statistics?.[`${attribute}`];
  }

}
