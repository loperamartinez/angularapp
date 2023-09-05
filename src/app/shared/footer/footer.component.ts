import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  //Mantiene actualizado el año en el footer
  fecha: number = new Date().getFullYear();
}
