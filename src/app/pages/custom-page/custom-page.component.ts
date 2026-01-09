import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Mario');
  uppercase = signal<boolean>(true);

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
