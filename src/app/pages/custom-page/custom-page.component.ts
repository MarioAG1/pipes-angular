import { Hero } from './../../interfaces/hero.interface';
import { Component, computed, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { Creator } from '../../interfaces/hero.interface';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { heroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    heroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Mario');
  uppercase = signal<boolean>(true);
  heroes = signal(heroes);
  DC = Creator.DC;
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('');

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

  // Para comprobar si el valor esta vacio o no y sustituirlo, se puede hacer asi
  comprobarQuery() {
    const valor = this.searchQuery().trim();
    if (valor === '') {
      return 'XXX';
    } else return valor;
  }

  // Asi es la forma computada, que solo se activara si el searchQuery() cambia
  // comprobarQuery = computed(() => {
  //   const valor = this.searchQuery().trim();
  //   if (valor === '') {
  //     return 'XXX';
  //   } else return valor;
  // });
}
