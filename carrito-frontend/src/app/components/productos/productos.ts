import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductoService } from '../../services/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {

  productos: any[] = [];

  producto = {
    categoria_id: 1,
    nombre: '',
    precio: 0,
    stock: 0,
    imagen: ''
  };

  editando = false;
  idEditar = 0;

  constructor(
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {

    this.productoService
      .obtenerProductos()
      .subscribe({

        next: (datos: any[]) => {
          this.productos = datos;
        },

        error: (err: any) => {
          console.error(err);
        }

      });

  }

  guardarProducto() {

    this.productoService
      .agregarProducto(this.producto)
      .subscribe({

        next: () => {

          this.limpiarFormulario();

          this.cargarProductos();

        },

        error: (err: any) => {
          console.error(err);
        }

      });

  }

  editar(producto: any) {

    this.editando = true;

    this.idEditar = producto.id;

    this.producto = {
      categoria_id: producto.categoria_id,
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      imagen: producto.imagen
    };

  }

  actualizarProducto() {

    this.productoService
      .actualizarProducto(
        this.idEditar,
        this.producto
      )
      .subscribe({

        next: () => {

          this.editando = false;

          this.idEditar = 0;

          this.limpiarFormulario();

          this.cargarProductos();

        },

        error: (err: any) => {
          console.error(err);
        }

      });

  }

  eliminar(id: number) {

    if (!confirm('¿Eliminar producto?')) {
      return;
    }

    this.productoService
      .eliminarProducto(id)
      .subscribe({

        next: () => {

          this.cargarProductos();

        },

        error: (err: any) => {
          console.error(err);
        }

      });

  }

  limpiarFormulario() {

    this.producto = {

      categoria_id: 1,
      nombre: '',
      precio: 0,
      stock: 0,
      imagen: ''

    };

  }

}