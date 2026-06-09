import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/productos';

  obtenerProductos() {
    return this.http.get<any[]>(this.apiUrl);
  }

}