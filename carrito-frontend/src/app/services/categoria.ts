import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/categorias';

  obtenerCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarCategoria(categoria: any) {
    return this.http.post(this.apiUrl, categoria);
  }

  actualizarCategoria(id: number, categoria: any) {
    return this.http.put(`${this.apiUrl}/${id}`, categoria);
  }

  eliminarCategoria(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}