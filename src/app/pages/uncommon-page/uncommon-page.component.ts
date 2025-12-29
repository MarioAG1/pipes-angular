import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Cliente } from '../../interfaces/cliente.interface';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
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

  clients = signal(['Mario', 'Pedro', 'Javier']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}
