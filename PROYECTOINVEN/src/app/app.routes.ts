import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';  
import { NegociosComponent } from './negocios/negocios.component';
import { LocalesComponent } from './locales/locales.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { InventariosComponent } from './inventarios/inventarios.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },          
  { path: 'register', component: RegisterComponent },     
  { path: 'inicio', component: InicioComponent },
  { path: 'negocios', component: NegociosComponent },
  { path: 'locales', component: LocalesComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'inventario', component: InventariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
