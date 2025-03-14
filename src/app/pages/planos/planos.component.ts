import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface TableRow {
  item: string;
  descripcion: string;
  nombre: string;
  linea: string;
  categoria: string;
  subcategoria: string;
  valorSinIVA: string;
  IVA: string;
  valorIVA: string;
  valorConIVA: string;
  cantidad: string;
  totalSinIVA: string;
  IVATotal: string;
  total: string;
}

@Component({
  selector: 'app-planos',
  standalone: true, // Asegurar que sea standalone
  imports: [CommonModule, FormsModule],
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export default class PlanosComponent {
  data: TableRow[] = [
    { 
      item: '', descripcion: '', nombre: '', linea: '', categoria: '', subcategoria: '', 
      valorSinIVA: '', IVA: '', valorIVA: '', valorConIVA: '', cantidad: '', 
      totalSinIVA: '', IVATotal: '', total: '' 
    }
  ];

  constructor(private apiService: ApiService) {}

  updateValue(index: number, field: keyof TableRow, event: any) {
    if (field === 'descripcion') {
      const previousValue = this.data[index].descripcion;

      // Actualizamos el valor del campo con el texto ingresado
      this.data[index][field] = event.target.value;

      // Si el contenido cambia y tiene más de 2 caracteres, realizamos la consulta
      if (event.type !== 'paste' && event.target.value.length > 2) {
        this.apiService.compararPorDescripcion(event.target.value).subscribe({
          next: (response: any) => {
            console.log('Respuesta de la API:', response);

            if (Array.isArray(response) && response.length > 0) {
              const equivalencia = response[0];  // Acceder al primer objeto del arreglo

              if (equivalencia && equivalencia.idAxa !== undefined && equivalencia.descripcion) {
                this.data[index].item = equivalencia.idAxa.toString();
                this.data[index].nombre = equivalencia.descripcion;
              } else {
                console.error('La respuesta no contiene los datos esperados');
              }
            } else {
              console.error('La respuesta no contiene equivalencias');
            }
          },
          error: (err) => {
            console.error('Error al consultar equivalencias:', err);
          }
        });
      }
    }
  }

  onPaste(index: number, event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');

    if (pastedText) {
      event.preventDefault();
      const lines = pastedText.split(/\r?\n/);

      lines.forEach((line, idx) => {
        if (idx === 0) {
          this.data[index].descripcion = line;
        } else {
          this.data.push({
            item: '',
            descripcion: line, 
            nombre: '', 
            linea: '', 
            categoria: '', 
            subcategoria: '', 
            valorSinIVA: '', 
            IVA: '', 
            valorIVA: '', 
            valorConIVA: '', 
            cantidad: '', 
            totalSinIVA: '', 
            IVATotal: '', 
            total: ''
          });
        }

        this.apiService.compararPorDescripcion(line).subscribe({
          next: (response: any) => {
            if (Array.isArray(response) && response.length > 0) {
              const equivalencia = response[0];
              if (equivalencia && equivalencia.idAxa !== undefined && equivalencia.descripcion) {
                this.data[index + idx].item = equivalencia.idAxa.toString();
                this.data[index + idx].nombre = equivalencia.descripcion;
              } else {
                console.error('La respuesta no contiene los datos esperados');
              }
            }
          },
          error: (err) => {
            console.error('Error al consultar equivalencias:', err);
          }
        });
      });
    }
  }

  onKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault(); 
      this.addRow(index); 
    }


    if ((event.key === 'Backspace' || event.key === 'Delete') && this.data[index].descripcion === '') {
      this.deleteRow(index);
    }
  }

  addRow(index: number) {

    this.data.splice(index + 1, 0, {
      item: '',
      descripcion: '', 
      nombre: '', 
      linea: '', 
      categoria: '', 
      subcategoria: '', 
      valorSinIVA: '', 
      IVA: '', 
      valorIVA: '', 
      valorConIVA: '', 
      cantidad: '', 
      totalSinIVA: '', 
      IVATotal: '', 
      total: ''
    });

    setTimeout(() => {
      const nextDescripcionInput = document.querySelectorAll('.descripcion')[index + 1];
      if (nextDescripcionInput) {
        (nextDescripcionInput as HTMLElement).focus();
      }
    }, 0);
  }

  deleteRow(index: number) {
    if (this.data.length > 1) {
      this.data.splice(index, 1);
    }
  }

  onBlur(index: number) {
    if (index >= 0 && index < this.data.length) {
      if (this.data[index].descripcion === '') {
        this.deleteRow(index);
      }
    } else {
      console.error('Índice fuera de rango:', index);
    }
  }
}
