import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersTeamComponent } from './players-team.component';
import {PlayerCardModule} from './player-card/player-card.module';



@NgModule({
    declarations: [
        PlayersTeamComponent
    ],
    exports: [
        PlayersTeamComponent
    ],
  imports: [
    CommonModule,
    PlayerCardModule
  ]
})
export class PlayersTeamModule { }
