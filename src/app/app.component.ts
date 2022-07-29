import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bdo';
  user = {
    nit: '800220154',
    nombre: 'Flotas la Macarena',
    capa: 'Oro',
    segmento: 'A',
    gerenteRelacion: 'Carlos Gómez'
  }
}
