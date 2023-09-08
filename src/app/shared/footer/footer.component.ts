import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor( public infoPaginaService: InfoPaginaService ) {}

  //Mantiene actualizado el año en el footer
  fecha: number = new Date().getFullYear();
}
