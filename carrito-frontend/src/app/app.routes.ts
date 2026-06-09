import { Routes } from '@angular/router';

import { Productos } from './components/productos/productos';
import { Carrito } from './components/carrito/carrito';
import { Historial } from './components/historial/historial';

export const routes: Routes = [
  {
    path: '',
    component: Productos
  },
  {
    path: 'carrito',
    component: Carrito
  },
  {
    path: 'historial',
    component: Historial
  }
];