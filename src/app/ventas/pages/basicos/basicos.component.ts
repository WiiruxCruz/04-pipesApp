import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'alfredo';
  nombreUpper: string = 'ALFREDO';
  nombreCompleto: string = 'aLFredO rAmIreZ';

  fecha: Date = new Date();
}
