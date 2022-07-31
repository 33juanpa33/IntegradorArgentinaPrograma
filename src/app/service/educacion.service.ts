import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServiceUrl = 'https://portfolioalfonso.herokuapp.com';

  constructor(private http:HttpClient) { }

  public obtenerEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServiceUrl}/educacion/lista`);
  }

  public agregarEducacion(educacion: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServiceUrl}/educacion/new`,educacion);
  }

  public editarEducacion(educacion: Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServiceUrl}/educacion/update`,educacion);
  }

  public borrarEducacion(educacion: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/educacion/delete/${educacion}`);
  }
}
