import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    if (value) {
      return 'DC';
    } else {
      return 'Marvel';
    }
  }
}
