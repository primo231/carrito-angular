import { Routes } from '@angular/router';

import { Productos } from './components/productos/productos';
import { Categorias } from './components/categorias/categorias';
import { Clientes } from './components/clientes/clientes';
import { Pedidos } from './components/pedidos/pedidos';
import { Carrito } from './components/carrito/carrito';
import { Historial } from './components/historial/historial';

export const routes: Routes = [

  { path: '', component: Productos },

  { path: 'categorias', component: Categorias },

  { path: 'clientes', component: Clientes },

  { path: 'pedidos', component: Pedidos },

  { path: 'carrito', component: Carrito },

  { path: 'historial', component: Historial }

];