import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballComponent } from './football.component';
import {PlayersTeamModule} from './players-team/players-team.module';



@NgModule({
  declarations: [
    FootballComponent
  ],
  exports: [
    FootballComponent
  ],
    imports: [
        CommonModule,
        PlayersTeamModule
    ]
})
export class FootballModule { }
