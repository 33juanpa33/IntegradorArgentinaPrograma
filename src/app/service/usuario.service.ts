import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public obtenerUsuario(): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }

  public agregarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/new`,usuario);
  }

  public editarUsuario (usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`, usuario);
  }

}
