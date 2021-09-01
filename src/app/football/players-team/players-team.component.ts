import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Player} from '../../../shared/models/player.model';

@Component({
  selector: 'app-players-team',
  templateUrl: './players-team.component.html',
  styleUrls: ['./players-team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayersTeamComponent implements OnInit {

  @Input() players: Player[];

  constructor() { }

  ngOnInit(): void {
  }

}
