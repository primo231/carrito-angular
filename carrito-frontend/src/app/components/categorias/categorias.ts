import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../services/categoria';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {

  categorias: any[] = [];

  categoria = {
    nombre: '',
    descripcion: ''
  };

  editando = false;

  idEditar = 0;

  constructor(
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias() {

    this.categoriaService
      .obtenerCategorias()
      .subscribe({

        next: datos => {

          this.categorias = datos;

        },

        error: err => {

          console.error(err);

        }

      });

  }

  guardarCategoria() {

    this.categoriaService
      .agregarCategoria(this.categoria)
      .subscribe({

        next: () => {

          this.categoria = {
            nombre: '',
            descripcion: ''
          };

          this.cargarCategorias();

        },

        error: err => {

          console.error(err);

        }

      });

  }

  editar(categoria: any) {

    this.editando = true;

    this.idEditar = categoria.id;

    this.categoria = {
      nombre: categoria.nombre,
      descripcion: categoria.descripcion
    };

  }

  actualizarCategoria() {

    this.categoriaService
      .actualizarCategoria(
        this.idEditar,
        this.categoria
      )
      .subscribe({

        next: () => {

          this.editando = false;

          this.idEditar = 0;

          this.categoria = {
            nombre: '',
            descripcion: ''
          };

          this.cargarCategorias();

        },

        error: err => {

          console.error(err);

        }

      });

  }

  eliminar(id: number) {

    if (!confirm('¿Eliminar categoría?')) {
      return;
    }

    this.categoriaService
      .eliminarCategoria(id)
      .subscribe({

        next: () => {

          this.cargarCategorias();

        },

        error: err => {

          console.error(err);

        }

      });

  }

}