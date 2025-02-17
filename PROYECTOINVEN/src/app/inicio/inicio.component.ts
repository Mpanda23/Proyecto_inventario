import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

 
  redirectToPage(event: any): void {
    const selectedOption = event.target.value;

   
    switch (selectedOption) {
      case 'negocios':
        this.router.navigate(['/negocios']);
        break;
      case 'locales':
        this.router.navigate(['/locales']);
        break;
      case 'categorias':
        this.router.navigate(['/categorias']);
        break;
      case 'compras':
        this.router.navigate(['/compras']);
        break;
      case 'ventas':
        this.router.navigate(['/ventas']);
        break;
      case 'productos':
        this.router.navigate(['/productos']);
        break;
      case 'inventario':
        this.router.navigate(['/inventario']);
        break;
      default:
        console.log('Selecciona una opción válida');
        break;
    }
  }

  
  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
