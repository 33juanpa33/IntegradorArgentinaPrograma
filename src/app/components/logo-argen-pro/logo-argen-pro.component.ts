import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logo-argen-pro',
  templateUrl: './logo-argen-pro.component.html',
  styleUrls: ['./logo-argen-pro.component.css']
})
export class LogoArgenProComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
}
