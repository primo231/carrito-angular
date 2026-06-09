import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/clientes';

  obtenerClientes() {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarCliente(cliente: any) {
    return this.http.post(this.apiUrl, cliente);
  }

  actualizarCliente(id: number, cliente: any) {
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }

  eliminarCliente(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}