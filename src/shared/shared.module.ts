import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ZeroNullPipe} from './pipes/zeroNullPipe';



@NgModule({
  declarations: [ZeroNullPipe],
  imports: [
    CommonModule
  ],
  exports: [ZeroNullPipe]
})
export class SharedModule { }
