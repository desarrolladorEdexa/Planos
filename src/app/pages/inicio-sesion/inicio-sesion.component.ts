import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export default class InicioSesionComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    const usuario = sessionStorage.getItem('usuario'); 
    if (usuario) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.apiService.getUsuarios().subscribe(usuarios => {
      console.log("Usuarios obtenidos:", usuarios); 
  
      const user = usuarios.find(u => u.correo === this.username && u.password === this.password);
      console.log("Usuario encontrado:", user); 
  
      if (user) {
        sessionStorage.setItem('usuario', JSON.stringify(user));
        Swal.fire({
          title: '¡Éxito!',
          text: 'Inicio de sesión exitoso',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    }, error => {
      console.error("Error en la petición:", error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo conectar con el servidor',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    });
  }
  
}
