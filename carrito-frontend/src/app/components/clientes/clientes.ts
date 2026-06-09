import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes implements OnInit {

  clientes: any[] = [];

  cliente = {
    nombre: '',
    correo: '',
    telefono: ''
  };

  editando = false;

  idEditar = 0;

  constructor(
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {

    this.clienteService
      .obtenerClientes()
      .subscribe({

        next: datos => {

          this.clientes = datos;

        },

        error: err => {

          console.error(err);

        }

      });

  }

  guardarCliente() {

    this.clienteService
      .agregarCliente(this.cliente)
      .subscribe({

        next: () => {

          this.cliente = {
            nombre: '',
            correo: '',
            telefono: ''
          };

          this.cargarClientes();

        },

        error: err => {

          console.error(err);

        }

      });

  }

  editar(cliente: any) {

    this.editando = true;

    this.idEditar = cliente.id;

    this.cliente = {
      nombre: cliente.nombre,
      correo: cliente.correo,
      telefono: cliente.telefono
    };

  }

  actualizarCliente() {

    this.clienteService
      .actualizarCliente(
        this.idEditar,
        this.cliente
      )
      .subscribe({

        next: () => {

          this.editando = false;

          this.idEditar = 0;

          this.cliente = {
            nombre: '',
            correo: '',
            telefono: ''
          };

          this.cargarClientes();

        },

        error: err => {

          console.error(err);

        }

      });

  }

  eliminar(id: number) {

    if (!confirm('¿Eliminar cliente?')) {
      return;
    }

    this.clienteService
      .eliminarCliente(id)
      .subscribe({

        next: () => {

          this.cargarClientes();

        },

        error: err => {

          console.error(err);

        }

      });

  }

}