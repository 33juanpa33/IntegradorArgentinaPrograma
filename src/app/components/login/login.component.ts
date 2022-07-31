import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin={
    email:'',
    password:''
  }

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async ingresar(){
    console.log(this.usuarioLogin);
    const { email, password } = this.usuarioLogin;
     await this.authService.login(email, password).then(res => {
      if (res) {
        this.router.navigate(['']);
      }
      else {
        alert("Datos ingresados inválidos")
      };
      console.log("Se identifico ", res)
    });
  }

  async ingresarConGoogle(){
    console.log(this.usuarioLogin);
    const { email, password } = this.usuarioLogin;
    await this.authService.loginWithGoogle(email, password).then(res => {
      if (res) {
        this.router.navigate(['']);
      }
      else {
        alert("No ha sido posible el ingreso")
      };
      console.log("Ingreso con Google ", res)
    });
  }

  crear(){
    console.log(this.usuarioLogin);
    const { email, password } = this.usuarioLogin;
    this.authService.register(email, password).then(res => {
      if (res) {
        this.router.navigate(['']);
      }
      else {
        alert("Ingrese un email válido y contraseña con más de 6 caracteres")
      };
      console.log("Se registro ", res)
    });
  }

  logout() {
    
    this.authService.logout();
  }
}
