import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carrito';
import { ProductoService } from '../../services/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {

  productos: Producto[] = [];

  constructor(
    private carritoService: CarritoService,
    private productoService: ProductoService
  ) {}
ngOnInit(): void {

  this.productoService
    .obtenerProductos()
    .subscribe({
      next: datos => {

        console.log('DATOS RECIBIDOS:', datos);

        this.productos = [...datos];

        console.log('PRODUCTOS:', this.productos);
        console.log('LONGITUD:', this.productos.length);

      },
      error: err => {
        console.error(err);
      }
    });

}

  agregar(producto: Producto) {
    this.carritoService.agregar(producto);
  }

}