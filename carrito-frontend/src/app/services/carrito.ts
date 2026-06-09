import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { ItemCarrito } from '../models/item-carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items: ItemCarrito[] = [];

  agregar(producto: Producto) {

    const existente = this.items.find(
      item => item.producto.id === producto.id
    );

    if (existente) {
      existente.cantidad++;
    } else {
      this.items.push({
        producto,
        cantidad: 1
      });
    }
  }

  obtenerItems(): ItemCarrito[] {
    return this.items;
  }

  obtenerTotal(): number {
    return this.items.reduce(
      (total, item) =>
        total + (item.producto.precio * item.cantidad),
      0
    );
  }

  eliminar(idProducto: number) {

    this.items = this.items.filter(
      item => item.producto.id !== idProducto
    );

  }

}