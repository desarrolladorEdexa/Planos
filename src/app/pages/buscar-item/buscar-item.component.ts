import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService, Equivalencias } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-item.component.html',
  styleUrl: './buscar-item.component.css'
})
export default class BuscarItemComponent {
  equivalencias: Equivalencias[] = [];
  filtro: any = {
    nitEdexa: '',
    idAxa: '',
    idProducto: '',
    descripcion: '',
    listaPrecio: ''
  };
  busquedaRealizada: boolean = false;
  isEditing: boolean = false;
  equivalenciaActual: Equivalencias | null = null; 

  constructor(private apiService: ApiService) {}

  buscarPorNit() {
    if (!this.filtro.nitEdexa.trim()) {
      Swal.fire('Advertencia', 'Por favor ingrese un NIT para buscar', 'warning');
      return;
    }

    this.apiService.getEquivalenciasPorNit(this.filtro.nitEdexa).subscribe({
      next: (data) => {
        this.equivalencias = data;
        this.busquedaRealizada = true;
      },
      error: (err) => {
        console.error('❌ Error al buscar equivalencias:', err);
        this.equivalencias = [];
        this.busquedaRealizada = true;
      }
    });
  }

  equivalenciasFiltradas() {
    return this.equivalencias.filter(equivalencia => {
      return (
        (!this.filtro.idAxa || equivalencia.idAxa.toString().toLowerCase().includes(this.filtro.idAxa.toString().toLowerCase())) &&
        (!this.filtro.nitEdexa || equivalencia.nitEdexa.toLowerCase().includes(this.filtro.nitEdexa.toLowerCase())) &&
        (!this.filtro.idProducto || equivalencia.idProducto.toLowerCase().includes(this.filtro.idProducto.toLowerCase())) &&
        (!this.filtro.descripcion || equivalencia.descripcion.toLowerCase().includes(this.filtro.descripcion.toLowerCase())) &&
        (!this.filtro.listaPrecio || equivalencia.listaPrecio.toLowerCase().includes(this.filtro.listaPrecio.toLowerCase()))
      );
    });
  }

  editarEquivalencia(equivalencia: Equivalencias) {
    this.equivalenciaActual = { ...equivalencia }; // Clonamos el objeto para edición
    this.isEditing = true;
  }

  guardarEdicion() {
    if (!this.equivalenciaActual || !this.equivalenciaActual.id) {
      Swal.fire('Error', 'No se puede actualizar la equivalencia sin un ID válido', 'error');
      return;
    }
  
    this.apiService.updateEquivalencia(this.equivalenciaActual.id, this.equivalenciaActual).subscribe({
      next: () => {
        Swal.fire('Guardado', 'Equivalencia actualizada correctamente', 'success');
  
        // Actualiza la lista con los nuevos valores
        this.equivalencias = this.equivalencias.map(e =>
          e.id === this.equivalenciaActual!.id ? { ...this.equivalenciaActual! } : e
        );
  
        this.isEditing = false; // Cierra el modal de edición
      },
      error: (err) => {
        console.error('❌ Error al actualizar equivalencia:', err);
  
        if (err.status === 400) {
          Swal.fire('Error', 'El ID de la URL no coincide con el de la entidad.', 'warning');
        } else if (err.status === 409) {
          Swal.fire('Conflicto', 'Ya existe una equivalencia con el mismo ID AXA y NIT EDEXA.', 'warning');
        } else if (err.status === 404) {
          Swal.fire('No encontrado', 'No se encontró la equivalencia a actualizar.', 'error');
        } else {
          Swal.fire('Error', 'No se pudo actualizar la equivalencia. Intente nuevamente.', 'error');
        }
      }
    });
  }
  
  

  eliminarEquivalencia(id: number) {
    Swal.fire({
      title: '¿Eliminar equivalencia?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteEquivalencia(id).subscribe(() => {
          Swal.fire('Eliminado', 'Equivalencia eliminada', 'success');
          this.equivalencias = this.equivalencias.filter(e => e.id !== id);
        });
      }
    });
  }
}
