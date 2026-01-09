import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase', // 'mario' | toggleCase
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    if (upper === true) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
    // return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
