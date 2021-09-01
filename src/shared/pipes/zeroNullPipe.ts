import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'zeroNull'})
export class ZeroNullPipe implements PipeTransform {

  constructor() {}

  transform(num: number | null | undefined): number {
    return num ? num : 0;
  }
}
