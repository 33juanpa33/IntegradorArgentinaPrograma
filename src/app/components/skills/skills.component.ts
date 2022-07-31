import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/model/skills.model';
import { AuthService } from 'src/app/service/auth.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skilles: Skills[] = [];
  public modificarSkills: Skills | undefined;
  public borrarSkills: Skills | any;

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.obtenerSkills()
  }

  public obtenerSkills(): void {
    this.skillsService.obtenerSkills().subscribe({
      next: (Response: Skills[]) => {
        this.skilles = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: string, skills?: Skills): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'agregar') {
      button.setAttribute('data-bs-target', '#agregarSkillsModal');
    } else if (mode === 'borrar') {
      this.borrarSkills = skills;
      button.setAttribute('data-bs-target', '#borrarSkillsModal');
    } else if (mode === 'modificar') {
      this.modificarSkills = skills;
      button.setAttribute('data-bs-target', '#modificarSkillsModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddSkills(addForm: NgForm): void {
    document.getElementById('add-skills-form')?.click();
    this.skillsService.agregarSkills(addForm.value).subscribe({
      next: (response: Skills) => {
        // console.log(response);
        this.obtenerSkills();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateSkills(skills: Skills) {
    this.modificarSkills = skills;
    document.getElementById('add-skills-form')?.click();
    this.skillsService.editarSkills(skills).subscribe({
      next: (response: Skills) => {
        // console.log(response);
        this.obtenerSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onDeleteSkills(idSkill: number): void {
    this.skillsService.borrarSkills(idSkill).subscribe({
      next: (response: void) => {
        // console.log(response);
        this.obtenerSkills();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
