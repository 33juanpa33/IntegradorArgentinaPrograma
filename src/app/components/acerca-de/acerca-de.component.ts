import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public usuario: Usuario | undefined;
  public modificarUsuario: Usuario | undefined;

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  public obtenerUsuario(): void {
    this.usuarioService.obtenerUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: string, usuario?: Usuario): void {
    console.log(usuario);
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='agregar'){
      button.setAttribute('data-bs-target', '#agregarUsuarioModal');
    }else if(mode==='borrar'){
      // this.borrarUsuario=usuario;
      button.setAttribute('data-bs-target', '#borrarUsuarioModal');
    }else if(mode==='modificar'){
      this.modificarUsuario=usuario;
      button.setAttribute('data-bs-target', '#modificarUsuarioModal');
    };
    container?.appendChild(button);
    button.click();
  }

  public onAddUsuario(addForm: NgForm): void{
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.agregarUsuario(addForm.value).subscribe({
      next:(response:Usuario) => {
        // console.log(response);
        this.obtenerUsuario();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
    })
  }

  public onUpdateUsuario(usuario: Usuario){
    this.modificarUsuario = usuario;
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.editarUsuario(usuario).subscribe({
      next: (response:Usuario) => {
        // console.log(response);
        this.obtenerUsuario();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
