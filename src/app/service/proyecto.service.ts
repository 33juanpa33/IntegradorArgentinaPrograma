import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServiceUrl = 'https://portfolioalfonso.herokuapp.com';

  constructor(private http:HttpClient) { }

  public obtenerProyecto(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServiceUrl}/proyecto/lista`);
  }

  public agregarProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServiceUrl}/proyecto/new`,proyecto);
  }

  public editarProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServiceUrl}/proyecto/update`,proyecto);
  }

  public borrarProyecto(proyectoId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/proyecto/delete/${proyectoId}`);
  }
}
