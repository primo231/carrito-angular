import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  constructor(public carritoService: CarritoService) {}

  eliminar(idProducto: number) {
    this.carritoService.eliminar(idProducto);
  }

}