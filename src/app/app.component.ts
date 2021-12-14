import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string = 'Alfredo Ramirez';
  valor: number = 1000;
  obj = {
    nombre: 'Alfredo'
  }
  mostrarNombre() {
    console.log( this.nombre );
  }

  constructor( private PrimeNGConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.PrimeNGConfig.ripple = true;
  }
}
