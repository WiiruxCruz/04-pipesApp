import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre1: string = 'Alfredo';
  genero1: string = 'masculino';

  nombre2: string = 'Maria';
  genero2: string = 'femenino';

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

  cambiarCliente() {
    if(this.nombre === this.nombre1){
      this.nombre = this.nombre2;
      this.genero = this.genero2;
    } else {
      this.nombre = this.nombre1;
      this.genero = this.genero1;
    }
  }

  borrarCliente() {
    if(this.clientes.length > 0){
      this.clientes.pop();
    }
  }
}
