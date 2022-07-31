import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServiceUrl = 'https://portfolioalfonso.herokuapp.com';

  constructor(private http:HttpClient) { }

  public obtenerExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServiceUrl}/experiencia/lista`);
  }

  public agregarExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServiceUrl}/experiencia/new`,experiencia);
  }

  public editarExperiencia(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServiceUrl}/experiencia/update`,experiencia);
  }

  public borrarExperiencia(experienciaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/experiencia/delete/${experienciaId}`);
  }
}
