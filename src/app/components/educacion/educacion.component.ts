import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educaciones: Educacion[] = [];
  public modificarEducacion: Educacion | undefined;
  public borrarEducacion: Educacion | any;

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.obtenerEducacion();

  }

  public obtenerEducacion(): void{
    this.educacionService.obtenerEducacion().subscribe({
      next: (Response: Educacion[]) => {
        this.educaciones=Response;
      },
      error: (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: string, educacion?: Educacion): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregarEducacionModal');
    }else if(mode==='borrar'){
      this.borrarEducacion=educacion;
      button.setAttribute('data-bs-target', '#borrarEducacionModal');
    }else if(mode==='modificar'){
      this.modificarEducacion=educacion;
      button.setAttribute('data-bs-target', '#modificarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEducacion(addForm: NgForm): void{
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.agregarEducacion(addForm.value).subscribe({
      next:(response:Educacion) => {
        console.log(response);
        this.obtenerEducacion();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
    })
  }

  public onUpdateEducacion(educacion: Educacion){
    this.modificarEducacion=educacion;
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.editarEducacion(educacion).subscribe({
      next: (response:Educacion) => {
        console.log(response);
        this.obtenerEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteEducacion(idEdu: number): void{
    this.educacionService.borrarEducacion(idEdu).subscribe({
      next: (response:void) => {
        console.log(response);
        this.obtenerEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
