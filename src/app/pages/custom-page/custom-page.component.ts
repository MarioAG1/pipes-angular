import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { Creator } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Mario');
  uppercase = signal<boolean>(true);
  heroes = signal(heroes);
  DC = Creator.DC;

  changeCase() {
    if (this.uppercase() === true) {
      this.uppercase.set(false);
    } else {
      this.uppercase.set(true);
    }
  }
  // Suya
  // changeCase() {
  //   this.uppercase.set(!this.uppercase());
  // }
}
