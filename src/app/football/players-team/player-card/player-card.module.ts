import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './player-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {SharedModule} from '../../../../shared/shared.module';



@NgModule({
    declarations: [
        PlayerCardComponent
    ],
    exports: [
        PlayerCardComponent
    ],
  imports: [
    CommonModule,
    MatDividerModule,
    SharedModule
  ]
})
export class PlayerCardModule { }
