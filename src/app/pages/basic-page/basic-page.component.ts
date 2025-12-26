import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvaiableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localService = inject(LocalService);

  //Se debe de tomar el LOCAL del servicio, pero esta es otra manera
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('mario');
  nameUpper = signal('MARIO');
  fullName = signal('MaRiO aLVArez');

  customDate = signal(new Date());
  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);
    onCleanUp(() => {
      clearInterval(interval);
    });
  });

  changeLocal(locale: AvaiableLocale) {
    console.log(locale);
    this.localService.changeLocale(locale);
  }
}
