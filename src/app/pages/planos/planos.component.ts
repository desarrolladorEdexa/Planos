import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { RouterLink } from '@angular/router';

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
  error?: boolean;
}

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export default class PlanosComponent implements OnInit {
  listaPrecios: number = 0;
  idAxa: number | null = null;
  nitEdexa: string = '';
  data: TableRow[] = [
    {
      item: '', descripcion: '', nombre: '', linea: '', categoria: '', subcategoria: '', 
      valorSinIVA: '', IVA: '', valorIVA: '', valorConIVA: '', cantidad: '', 
      totalSinIVA: '', IVATotal: '', total: '' 
    }
  ];

  isDataValid(): boolean {
    return this.data.length > 0 && this.data.some(row => 
      row.item.trim() !== '' ||
      row.descripcion.trim() !== '' ||
      row.nombre.trim() !== '' ||
      row.linea.trim() !== '' ||
      row.categoria.trim() !== '' ||
      row.subcategoria.trim() !== '' ||
      row.valorSinIVA.trim() !== '' ||
      row.IVA.trim() !== '' ||
      row.valorIVA.trim() !== '' ||
      row.valorConIVA.trim() !== '' ||
      row.cantidad.trim() !== '' ||
      row.totalSinIVA.trim() !== '' ||
      row.IVATotal.trim() !== '' ||
      row.total.trim() !== ''
    );
  }
  debounceTimer: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const storedNit = sessionStorage.getItem('nit');
    if (storedNit) {
        this.nitEdexa = storedNit;
        this.buscarPorNitId();
    }

    const storedIndices = sessionStorage.getItem('tablaIndices');
    if (storedIndices) {
        this.data = JSON.parse(storedIndices);

        setTimeout(() => {
            this.data.forEach((row, index) => {
                this.buscarEquivalencias(row.descripcion, index);
            });
        }, 500);
    }
}

  

  guardarDatos() {
    console.log('Guardando datos en localStorage:', this.data);
    const indices = this.data.map((row: TableRow, index: number) => ({
      index: index,
      descripcion: row.descripcion
    }));
  
    sessionStorage.setItem('tablaIndices', JSON.stringify(indices));
  }

  buscarPorNitId() {
    if (!this.nitEdexa.trim()) {
      Swal.fire('Advertencia', 'Por favor ingrese un NIT para buscar', 'warning');
      return;
    }
    debugger
    console.log(this.nitEdexa)
    this.apiService.getEquivalenciasPorNitId(this.nitEdexa).subscribe({
      next: (data) => {
        console.log('✅ Equivalencia encontrada:', data);
        this.listaPrecios = Number(data.listaPrecio); 
        sessionStorage.setItem('nit', this.nitEdexa);
      },
      error: (err) => {
        console.error('❌ Error al buscar equivalencia:', err);
        Swal.fire('Error', 'No se encontró una equivalencia con ese NIT', 'error');
        this.listaPrecios = 0; 
      }
    });
  }

  onNitChange() {
    clearTimeout(this.debounceTimer);
  
    if (!this.nitEdexa.trim()) return; 
  
    this.debounceTimer = setTimeout(() => {
      this.buscarPorNitId();
    }, 500); 
  }
  

  onDescripcionChange(descripcion: string, index: number) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.buscarEquivalencias(descripcion, index); 
    }, 500);
  }

  buscarEquivalencias(descripcion: string, index: number) {
    debugger

    const descripcionLimpia = descripcion.trim().toLowerCase();
  
    console.log(`🔍 Buscando equivalencia para: "${descripcionLimpia}" en la fila ${index}`);
  
    if (descripcionLimpia.length < 3) {
      console.warn(`⚠️ Descripción muy corta: "${descripcionLimpia}". Eliminando fila...`);
      this.eliminarFila(index);
      return;
    }
  
    this.apiService.getEquivalenciaPorDescripcion(descripcionLimpia).subscribe({
      next: (equivalencia) => {
        console.log(`✅ Equivalencia encontrada:`, equivalencia);
        
        if (equivalencia) {
          this.idAxa = equivalencia.idAxa;
          this.obtenerItemPorId(equivalencia.descripcion, index);
        } else {
          console.warn(`❌ No se encontró equivalencia para "${descripcionLimpia}". Eliminando fila...`);
          this.eliminarFila(index);
        }
      },
      error: (err) => {
        console.error(`❌ Error al obtener equivalencia para "${descripcionLimpia}"`, err);
        this.eliminarFila(index);
      }
    });
    this.guardarDatos();
  }
  
  obtenerItemPorId(descripcion: string, index: number) {
    if (this.idAxa === null) {
      Swal.fire('Advertencia', 'No se puede buscar el ítem porque el ID Axa es NULL.', 'warning');
      this.eliminarFila(index);
      return;
    }
    
    this.apiService.obtenerItems(this.listaPrecios, this.idAxa).subscribe({
      next: (response: any[]) => {
        if (!response || response.length === 0) {
          Swal.fire('Advertencia', 'No se encontraron ítems para la búsqueda.', 'warning');
          this.data[index].error = true; 
          return;
        }
  
        let encontrado = false;
  
        response.forEach(newItem => {
          if (!newItem.idItem) return;
  
          const filaConDescripcion = this.data.findIndex(row => 
            row.descripcion?.trim().toLowerCase() === descripcion?.trim().toLowerCase()
          );
  
          // Asegurar que el índice encontrado es válido
          if (filaConDescripcion !== -1 && this.data[filaConDescripcion]) {
            this.data[filaConDescripcion] = {
              ...this.data[filaConDescripcion],
              item: newItem.idItem.toString(),
              nombre: newItem.descripcion || '',  
              linea: newItem.linea?.trim() || '',
              categoria: newItem.categoria?.trim() || '',
              subcategoria: newItem.subcategoria?.trim() || '',
              valorSinIVA: newItem.precio?.toString() || '0',
              IVA: newItem.impuesto?.toString() || '0',
              valorIVA: newItem.impuesto ? ((newItem.precio * newItem.impuesto) / 100).toFixed(2) : '0',
              valorConIVA: newItem.total?.toString() || '0',
              cantidad: this.data[filaConDescripcion].cantidad || "1",
              totalSinIVA: newItem.precio?.toString() || '0',
              IVATotal: newItem.impuesto ? ((newItem.precio * newItem.impuesto) / 100).toFixed(2) : '0',
              total: newItem.total?.toString() || '0'
            };
            encontrado = true;
          }
        });
  
        if (!encontrado) {
          Swal.fire('Advertencia', `No se encontró una fila con la descripción: "${descripcion}".`, 'warning');
        }
      },
      error: (err) => {
        console.error('❌ Error al obtener ítem por ID Axa:', err);
        Swal.fire('Error', 'Hubo un problema al obtener los ítems.', 'error');
      }
    });
  }
  
  hasError(): boolean {
    return this.data.some(row => row.error);  
  }

  agregarNuevaFila(descripcion: string = '') {
    const newRow: TableRow = {
      item: '',
      descripcion: descripcion,
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
    };
    this.data.push(newRow);
    this.guardarDatos();
  }

  onPasteDescripcion(event: ClipboardEvent, index: number) {
    event.preventDefault();
  
    const pasteData = event.clipboardData?.getData('text/plain') || '';
    const descriptions = pasteData.split('\n').map(desc => desc.trim()).filter(desc => desc);
  
    if (descriptions.length === 0) return;
  
    if (!this.data[index].descripcion.trim()) {
      this.data[index].descripcion = descriptions[0];
      this.buscarEquivalencias(this.data[index].descripcion, index);
      descriptions.shift(); 
    }
  
    descriptions.forEach((desc, i) => {
      const newRow: TableRow = {
        item: '',
        descripcion: desc,
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
      };
  
      this.data.splice(index + 1 + i, 0, newRow);
      this.buscarEquivalencias(desc, index + 1 + i); 
    });
  
  }

  updateValue(index: number, field: keyof TableRow, value: any) {
    if (typeof value === 'string') {
      value = value.trim();
    }
  
    (this.data[index] as any)[field] = value; 
  
    if (field === 'descripcion' && value.trim() === '') {
      this.eliminarFila(index);
    }
  
    if (field === 'cantidad') {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.calcularTotales(index);
      }, 300);
    }
  }
  
  
  
  onInputChange(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value.trim();
  
    this.data[index].descripcion = newValue;
  
    if (newValue === '') {
      this.eliminarFila(index);
    } else {
      this.onDescripcionChange(newValue, index);
    }
  }
  
  
  
  eliminarFila(index: number) {
    if (this.data.length > 1) {
      this.data.splice(index, 1);
    } else {
      this.data = [{
        item: '', descripcion: '', nombre: '', linea: '', categoria: '', 
        subcategoria: '', valorSinIVA: '', IVA: '', valorIVA: '', 
        valorConIVA: '', cantidad: '', totalSinIVA: '', IVATotal: '', total: ''
      }];
    }
  }
  
  

  verificarYEliminarFila(index: number) {
    const filaActual = this.data[index];
  
    const esFilaVacia = filaActual.descripcion.trim() === '';
  
    if (esFilaVacia && this.data.length > 1) {
      this.data.splice(index, 1);

      this.data = [...this.data];  
    }
  }
  
  calcularTotales(index: number) {
    const row = this.data[index];

    const cantidad = parseFloat(row.cantidad || '1'); 
    const valorSinIVA = parseFloat(row.valorSinIVA || '0'); 
    const IVA = parseFloat(row.IVA || '0'); 

    const valorIVA = (valorSinIVA * IVA) / 100;
    const valorConIVA = valorSinIVA + valorIVA;

    const totalSinIVA = valorSinIVA * cantidad;
    const IVATotal = valorIVA * cantidad;
    const total = valorConIVA * cantidad;

    this.data[index] = {
      ...row,
      valorIVA: valorIVA.toFixed(2),
      valorConIVA: valorConIVA.toFixed(2),
      totalSinIVA: totalSinIVA.toFixed(2),
      IVATotal: IVATotal.toFixed(2),
      total: total.toFixed(2)
    };
  }

  onKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter') {
      this.calcularTotales(index); 
    }
  }

  agregarFilaAlPresionarEnter(index: number) {
    const filaActual = this.data[index];
  
    console.log(`🔍 Verificando fila ${index}, descripción: "${filaActual.descripcion}"`);
  
    if (!filaActual.descripcion.trim()) {
      console.log(`🚫 No se agrega una nueva fila porque la descripción está vacía`);
      return; 
    }
  
    const nuevaFila: TableRow = {
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
    };
  
    this.data.splice(index + 1, 0, nuevaFila);
  
    console.log(`✅ Nueva fila agregada en posición ${index + 1}`, this.data);
  }

  exportarExcel() {
    if (this.data.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No hay datos para exportar',
        confirmButtonText: 'Entendido'
      });
      return;
    }
  
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'DatosTabla');
  
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  
    saveAs(blob, 'datos_tabla.xlsx');
  
    Swal.fire({
      icon: 'success',
      title: 'Archivo Excel generado',
      confirmButtonText: 'Descargar'
    });
  }

  limpiarSesion(){
    sessionStorage.removeItem('tablaIndices');
    sessionStorage.removeItem('nit');
    location.reload()
  }
  

}
