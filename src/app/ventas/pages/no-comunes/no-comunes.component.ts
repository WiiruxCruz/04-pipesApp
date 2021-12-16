import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Marcos'];
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

  //KeyValue Pipe
  persona = {
    nombre: 'Alfredo',
    edad: 29,
    direccion: 'Ciudad de Mexico, Mexico'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    }, {
      nombre: 'Robin',
      vuela: false
    }, {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //async pipe
  miObservable = interval(5000).pipe( tap( () => console.log('interval') ) ); //0,1,2,3,4,5,6

  valorPromesa = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          resolve('Tenemos data de promesa');
        }, 3500
      )
    }
  )
  ;
}
