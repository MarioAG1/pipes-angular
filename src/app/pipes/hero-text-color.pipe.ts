import { Color, ColorMap } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value];
  }
}
