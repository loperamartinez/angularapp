import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any;
  productosFiltrado: any[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise <void>( ( resolve, reject ) => {
      this.http.get('https://angular-html-69cf3-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto) =>{
  
        this.productos = resp;
        this.cargando = false;
        resolve();
      }
      );
    })
    
  }

  getProducto( id: string){

    return this.http.get(`https://angular-html-69cf3-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string){

    if( this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // aplicar el filtro
        this.filtrarProductos( termino );
      })
    }
    else{
      // aplicar el filtro
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos( termino: string){
    console.log(this.productos);
    this.productosFiltrado = [];

    //Para que no importe si se escribe en mayuscula o minuscula
    //termino = termino.toLocaleLowerCase();

    this.productos.forEach( (prod:any) => {

      //const tituloLower = prod.titulo.toLocalLowerCase();

      if( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.indexOf( termino ) >= 0) {
        this.productosFiltrado.push( prod );
      }
    });
  }

}
