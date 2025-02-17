import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';  
// Aquí agregas los nuevos componentes
import { NegociosComponent } from './negocios/negocios.component';
import { LocalesComponent } from './locales/locales.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { InventarioComponent } from './inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,  
    // Aquí agregas los nuevos componentes
    NegociosComponent,
    LocalesComponent,
    CategoriasComponent,
    ComprasComponent,
    VentasComponent,
    ProductosComponent,
    InventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
