import { Injectable, signal } from '@angular/core';

export type AvaiableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private currentLocate = signal<AvaiableLocale>('fr');

  constructor() {
    this.currentLocate.set((localStorage.getItem('locale') as AvaiableLocale) ?? 'es');
  }

  get getLocale() {
    return this.currentLocate();
  }

  changeLocale(local: AvaiableLocale) {
    localStorage.setItem('locale', local);
    this.currentLocate.set(local);
    window.location.reload();
  }
}
