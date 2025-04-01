import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService, Equivalencias } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-item.component.html',
  styleUrl: './nuevo-item.component.css'
})
export default class NuevoItemComponent {
  equivalencia: Equivalencias = {
    idAxa: 0,
    nitEdexa: '',
    idProducto: '',
    descripcion: '',
    listaPrecio: '',
    id: 0
  };

  constructor(private apiService: ApiService) {}

  guardarEquivalencia() {
    this.apiService.createEquivalencia(this.equivalencia).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Equivalencia guardada correctamente', 'success');
      },
      error: (err) => {
        Swal.fire('Error', 'Hubo un problema al guardar', 'error');
        console.error(err);
      }
    });
  }

  cargarPorPlano(event: any) {
    const fileInput = event.target;
    const file = fileInput.files[0];
  
    if (!file) {
      Swal.fire('Error', 'Debe seleccionar un archivo.', 'error');
      return;
    }
  
    const formData = new FormData();
    formData.append('archivo', file);
  
    this.apiService.cargarEquivalenciasPorPlano(formData).subscribe({
      next: (response: any) => {
        Swal.fire('Éxito', `Se cargaron ${response.cantidad} equivalencias correctamente.`, 'success');
        
        fileInput.value = '';
      },
      error: (err) => {
        Swal.fire('Error', 'Hubo un problema al subir el archivo.', 'error');
        console.error(err);
        
        fileInput.value = '';
      }
    });
  }
  
}
