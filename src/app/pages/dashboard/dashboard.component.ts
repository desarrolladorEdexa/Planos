import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export default class DashboardComponent {
  tipoUsuario: number | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener el usuario de sessionStorage
    const usuarioGuardado = sessionStorage.getItem('usuario');
  
    if (usuarioGuardado) {
      const usuarioObj = JSON.parse(usuarioGuardado); // Convertir el string a objeto
      this.tipoUsuario = usuarioObj.tipoUsuario; // Obtener solo el tipoUsuario
      console.log('Tipo de usuario:', this.tipoUsuario);
    } else {
      console.log('No hay usuario en sessionStorage');
    }
  }
  

  salir(event: Event) {
    event.preventDefault(); 
  
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: '¿Estás seguro de que deseas salir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        this.router.navigate(['/inicio']);
  
        Swal.fire({
          title: 'Sesión cerrada',
          text: 'Has salido del sistema',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false, 
          allowOutsideClick: false, 
          timerProgressBar: true
        });
      }
    });
  }
}
  
  
