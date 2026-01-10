import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Mario');
  uppercase = signal<boolean>(true);
  heroes = signal(heroes);

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
