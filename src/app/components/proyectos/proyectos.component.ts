import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyecto[] = [];
  public modificarProyecto: Proyecto | undefined;
  public borrarProyecto: Proyecto | any;

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  public obtenerProyecto(): void{
    this.proyectoService.obtenerProyecto().subscribe({
      next: (Response: Proyecto[]) => {
        this.proyectos=Response;
      },
      error: (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: string, proyecto?: Proyecto): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregarProyectoModal');
    }else if(mode==='borrar'){
      this.borrarProyecto=proyecto;
      button.setAttribute('data-bs-target', '#borrarProyectoModal');
    }else if(mode==='modificar'){
      this.modificarProyecto=proyecto;
      button.setAttribute('data-bs-target', '#modificarProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddProyecto(addForm: NgForm): void{
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.agregarProyecto(addForm.value).subscribe({
      next:(response:Proyecto) => {
        // console.log(response);
        this.obtenerProyecto();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
    })
  }

  public onUpdateProyecto(proyecto: Proyecto){
    this.modificarProyecto=proyecto;
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoService.editarProyecto(proyecto).subscribe({
      next: (response:Proyecto) => {
        // console.log(response);
        this.obtenerProyecto();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteProyecto(idProy: number): void{
    this.proyectoService.borrarProyecto(idProy).subscribe({
      next: (response:void) => {
        // console.log(response);
        this.obtenerProyecto();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
