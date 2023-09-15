import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

id!: any;
producto: ProductoDescripcion = {};


  constructor( private route: ActivatedRoute,
    public productoService: ProductosService) { }

  ngOnInit(){

    this.route.params
      .subscribe( parametros => {

        //console.log();

        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {

            this.id! = parametros['id'];
            this.producto = producto;
           // console.log(producto);
          })


      });

  }

}
