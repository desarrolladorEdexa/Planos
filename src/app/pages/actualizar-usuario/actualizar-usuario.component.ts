import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

export interface IUsuarios {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
  fechaCreacion?: string;
  tipoUsuario: number; 
  rolUsuario?: string; 
}

@Component({
  selector: 'app-actualizar-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export default class ActualizarUsuarioComponent implements OnInit {
  users: IUsuarios[] = []; 
  user: IUsuarios = { nombre: '', correo: '', password: '', tipoUsuario: 0 }; 
  newUser: IUsuarios = { nombre: '', correo: '', password: '', tipoUsuario: 0 };
  isEditing = false;
  isCreating = false; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers(); // Cargar los usuarios al iniciar el componente
  }

  // Cargar todos los usuarios desde la API
  loadUsers() {
    this.apiService.getUsuarios().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo cargar los usuarios',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    );
  }

  // Activar el modo de edición y cargar los datos del usuario seleccionado
  editUser(user: IUsuarios) {
    this.user = { ...user }; // Copiar los datos del usuario a editar
    this.isEditing = true;
  }

  // Guardar los cambios en el usuario
  saveChanges() {
    if (this.user.id === undefined) {
      Swal.fire({
        title: 'Error',
        text: 'No se encontró el ID del usuario',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    Swal.fire({
      title: '¿Guardar cambios?',
      text: '¿Estás seguro de que deseas actualizar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.updateUsuarios(this.user.id as number, this.user).subscribe(
          () => {
            Swal.fire({
              title: '¡Éxito!',
              text: 'Usuario actualizado correctamente',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });

            this.isEditing = false;
            this.loadUsers(); // Recargar la lista de usuarios
          },
          () => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo actualizar el usuario',
              icon: 'error',
              confirmButtonText: 'Intentar de nuevo'
            });
          }
        );
      }
    });
  }

  // Eliminar un usuario
  deleteUser(id: number | undefined) {
    if (id === undefined) return;

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteUsuarios(id).subscribe(
          () => {
            Swal.fire({
              title: '¡Eliminado!',
              text: 'El usuario ha sido eliminado correctamente',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });

            this.loadUsers(); // Recargar la lista de usuarios
          },
          () => {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo eliminar el usuario',
              icon: 'error',
              confirmButtonText: 'Intentar de nuevo'
            });
          }
        );
      }
    });
  }

  // Activar/desactivar el modo de edición
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  // Activar/desactivar el formulario para crear un nuevo usuario
  toggleCreate() {
    this.isCreating = !this.isCreating;
    if (!this.isCreating) {
      // Limpiar los campos cuando se cierre el formulario
      this.newUser = { nombre: '', correo: '', password: '', tipoUsuario: 0 };
    }
  }

  // Función para crear un nuevo usuario
  createUser() {
    // Asegúrate de que el usuario esté correctamente creado antes de enviarlo
    const newUser: IUsuarios = {
      id: 0,
      nombre: this.newUser.nombre,
      correo: this.newUser.correo,
      password: this.newUser.password,
      fechaCreacion: "",
      tipoUsuario: this.newUser.tipoUsuario,
      rolUsuario: "" // También un string vacío
    };
  
    // Log para verificar los datos antes de enviarlos
    console.log("Datos del nuevo usuario:", newUser);
  
    // Verificar que todos los campos estén completos
    if (!newUser.nombre || !newUser.correo || !newUser.password || !newUser.tipoUsuario) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
  
    // Enviar la solicitud para crear el usuario
    this.apiService.createUsuarios(newUser).subscribe(
      (response) => {
        console.log("Respuesta del servidor:", response); // Log de la respuesta
        Swal.fire({
          title: '¡Éxito!',
          text: 'Usuario creado correctamente',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        this.loadUsers(); // Recargar la lista de usuarios
        this.toggleCreate(); // Cerrar el formulario de creación
      },
      (error) => {
        // Log para ver el error completo
        console.error("Error al crear el usuario:", error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear el usuario',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    );
  }
  
}
