import { Injectable, signal } from '@angular/core';

export type AvaiableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private currentLocate = signal<AvaiableLocale>('fr');

  constructor() {
    const saved = localStorage.getItem('locale');

    if (saved === 'es' || saved === 'fr' || saved === 'en') {
      this.currentLocate.set(saved);
    } else {
      this.currentLocate.set('es');
    }
  }

  get getLocale() {
    return this.currentLocate();
  }

  // Para que en vez de utilizar una señal le pasemos directamente desde el servicio
  get getLocalefromService() {
    return this.currentLocate;
  }

  changeLocale(local: AvaiableLocale) {
    localStorage.setItem('locale', local);
    this.currentLocate.set(local);
    window.location.reload();
  }
}
