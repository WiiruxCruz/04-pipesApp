import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Alfredo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 clientes esperando.',
    'other': 'Tenemos # clientes esperando.'
  }
}
