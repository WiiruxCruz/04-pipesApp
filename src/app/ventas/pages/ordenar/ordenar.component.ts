import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  isMayuscula: boolean = false;

  convertirMayuscula(){
    this.isMayuscula = !this.isMayuscula;
  }

}
