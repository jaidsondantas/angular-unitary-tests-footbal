import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Player} from '../../../../shared/models/player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;

  constructor() {
  }

  ngOnInit(): void {
  }

}
