import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Alfredo Ramirez';
  valor: number = 1000;
  obj = {
    nombre: 'Alfredo'
  }
  mostrarNombre() {
    console.log( this.nombre );
  }
}
