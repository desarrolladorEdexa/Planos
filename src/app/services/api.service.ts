import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError, timeout } from 'rxjs';

export interface Equivalencias {
  idAxa: number;
  nitEdexa: string;
  idProducto: string;
  descripcion: string;
  listaPrecio: string;
  id: number;
}

export interface IUsuarios {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
  fechaCreacion?: string;
  tipoUsuario: number;
  rolUsuario?: string;
}

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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiItems = 'https://10.39.7.115:80/Plano/api/itemAll'; 
  private apiUrl = 'https://10.39.7.115:80/Plano/api/Equivalencias';
  private apiUsuarios ='https://10.39.7.115:80/Plano/api/Usuarios';
  private apiEquivalencias = 'https://10.39.7.115:80/Plano/api/ListasPrecios';

 
  constructor(private http: HttpClient) {}

  obtenerItems(listaPrecios: number, idItem: number): Observable<any[]> {
    const params = new HttpParams()
      .set('listaPrecios', listaPrecios.toString())
      .set('idItem', idItem.toString());
  
    return this.http.get<any[]>(`${this.apiEquivalencias}/ObtenerItems`, { params })
      .pipe(
        timeout(2000),
        catchError(error => {
          return throwError(() => new Error('Error en la solicitud, el servidor tardó demasiado en responder.'));
        })
      );
  }


  compararPorDescripcion(descripcion: string): Observable<any> {
    const url = `${this.apiItems}/comparar/descripcion/${encodeURIComponent(descripcion)}`;
    return this.http.get<any>(url);
  }

  getEquivalencias(): Observable<Equivalencias[]> {
    return this.http.get<Equivalencias[]>(this.apiUrl);
  }

  getEquivalenciaById(id: number): Observable<Equivalencias> {
    return this.http.get<Equivalencias>(`${this.apiUrl}/${id}`);
  }

  getEquivalenciaPorDescripcion(descripcion: string): Observable<Equivalencias> {
    return this.http.get<Equivalencias>(`${this.apiUrl}/descripcion/${descripcion}`);
  }

  getEquivalenciasPorNit(nitEdexa: string): Observable<Equivalencias[]> {
    return this.http.get<Equivalencias[]>(`${this.apiUrl}/nit/${encodeURIComponent(nitEdexa)}`);
  }

  getEquivalenciasPorNitId(nitEdexa: string): Observable<Equivalencias> {
    return this.http.get<Equivalencias>(`${this.apiUrl}/nitId/${encodeURIComponent(nitEdexa)}`);
  }

  createEquivalencia(equivalencia: Equivalencias): Observable<Equivalencias> {
    return this.http.post<Equivalencias>(this.apiUrl, equivalencia);
  }

  updateEquivalencia(id: number, equivalencia: Equivalencias): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, equivalencia);
  }

  deleteEquivalencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  getUsuarios(): Observable<IUsuarios[]> {
    return this.http.get<IUsuarios[]>(this.apiUsuarios);
  }

  getUsuariosById(id: number): Observable<IUsuarios> {
    return this.http.get<IUsuarios>(`${this.apiUsuarios}/${id}`);
  }

  createUsuarios(user: IUsuarios): Observable<IUsuarios> {
    if (!user.fechaCreacion) {
      user.fechaCreacion = new Date().toISOString(); 
    }
    return this.http.post<IUsuarios>(this.apiUsuarios, user);
  }
  
  updateUsuarios(id: number, Usuarios: IUsuarios): Observable<void> {
    return this.http.put<void>(`${this.apiUsuarios}/${id}`, Usuarios);
  }

  deleteUsuarios(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUsuarios}/${id}`);
  }

  enviarDatosTabla(data: TableRow[]) {
    return this.http.post('https://localhost:44390/excel', data);
    const url = 'https://localhost:44390/excel'; // 
    window.open(url, '_blank'); 
  }

  cargarEquivalenciasPorPlano(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/CargarPlano`, formData);
  }
  
}
