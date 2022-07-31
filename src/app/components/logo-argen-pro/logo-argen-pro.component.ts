import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-logo-argen-pro',
  templateUrl: './logo-argen-pro.component.html',
  styleUrls: ['./logo-argen-pro.component.css']
})
export class LogoArgenProComponent implements OnInit {

  userLogged = this.authService.getUserLogged();

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
      }
}
