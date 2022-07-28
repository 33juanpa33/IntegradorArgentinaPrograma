import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public obtenerSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServiceUrl}/skills/lista`);
  }

  public agregarSkills(skills: Skills): Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServiceUrl}/skills/new`,skills);
  }

  public editarSkills(skills: Skills): Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServiceUrl}/skills/update`,skills);
  }

  public borrarSkills(skillsId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/skills/delete/${skillsId}`);
  }
}
