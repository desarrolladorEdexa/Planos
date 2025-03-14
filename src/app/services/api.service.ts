import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EquivalenciasVolvo {
  idAxa: number;
  NitEdexa: string;
  IdProducto: string;
  // Agrega más propiedades según tu modelo en .NET
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiItems = 'https://localhost:44390/api/itemAll'; 
  private apiUrl = 'https://localhost:44390/api/Equivalencias';

 
  constructor(private http: HttpClient) {}

  compararPorDescripcion(descripcion: string): Observable<any> {
    const url = `${this.apiItems}/comparar/descripcion/${encodeURIComponent(descripcion)}`;
    return this.http.get<any>(url);
  }

  // Obtener todas las equivalencias
  getEquivalencias(): Observable<EquivalenciasVolvo[]> {
    return this.http.get<EquivalenciasVolvo[]>(this.apiUrl);
  }

  // Obtener una equivalencia por ID
  getEquivalenciaById(id: number): Observable<EquivalenciasVolvo> {
    return this.http.get<EquivalenciasVolvo>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva equivalencia
  createEquivalencia(equivalencia: EquivalenciasVolvo): Observable<EquivalenciasVolvo> {
    return this.http.post<EquivalenciasVolvo>(this.apiUrl, equivalencia);
  }

  // Actualizar una equivalencia
  updateEquivalencia(id: number, equivalencia: EquivalenciasVolvo): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, equivalencia);
  }

  // Eliminar una equivalencia
  deleteEquivalencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
