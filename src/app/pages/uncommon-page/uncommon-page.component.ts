import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Cliente } from '../../interfaces/cliente.interface';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1: Cliente = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Otawa, Canada',
};

const client2: Cliente = {
  name: 'Melisa',
  gender: 'female',
  age: 30,
  address: 'Toronto, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    AsyncPipe,
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18n Plural

  clientsMap = signal({
    '=0': 'tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal(['Mario', 'Pedro', 'Javier', 'Vicente', 'David']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue pipe

  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
      reject('Se ha denegado');
      console.log('Promesa finalizada');
    }, 3500);
  });

  //Async Observable Pipe
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap', value))
  );
}
