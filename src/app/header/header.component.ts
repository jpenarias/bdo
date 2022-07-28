import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'bdo';
  user = {
    nit: '800220154',
    nombre: 'Flotas la Macarena',
    capa: 'Oro',
    segmento: 'A',
    gerenteRelacion: 'Carlos Gómez'
  }
  constructor() { }

  ngOnInit(): void {
  }



}
