import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[] = [];
  public modificarExperiencia: Experiencia | undefined;
  public borrarExperiencia: Experiencia | any;

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.obtenerExperiencia();
  }

  public obtenerExperiencia(): void{
    this.experienciaService.obtenerExperiencia().subscribe({
      next: (Response: Experiencia[]) => {
        this.experiencias=Response;
      },
      error: (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: string, experiencia?: Experiencia): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregarExperienciaModal');
    }else if(mode==='borrar'){
      this.borrarExperiencia=experiencia;
      button.setAttribute('data-bs-target', '#borrarExperienciaModal');
    }else if(mode==='modificar'){
      this.modificarExperiencia=experiencia;
      button.setAttribute('data-bs-target', '#modificarExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddExperiencia(addForm: NgForm): void{
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.agregarExperiencia(addForm.value).subscribe({
      next:(response:Experiencia) => {
        // console.log(response);
        this.obtenerExperiencia();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
    })
  }

  public onUpdateExperiencia(experiencia: Experiencia){
    this.modificarExperiencia=experiencia;
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.editarExperiencia(experiencia).subscribe({
      next: (response:Experiencia) => {
        // console.log(response);
        this.obtenerExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteExperiencia(idExp: number): void{
    this.experienciaService.borrarExperiencia(idExp).subscribe({
      next: (response:void) => {
        // console.log(response);
        this.obtenerExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}