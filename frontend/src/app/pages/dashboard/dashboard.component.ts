import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit,Inject, ChangeDetectorRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Estudiante } from 'src/app/services/estudiante';
//import { EstudianteService } from 'src/app/services/estudiante.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  router: Router;

  //estudiante: Estudiante[] = [];

  constructor( private userService:UsuarioService,@Inject(Router) router: Router) {
    this.router = router;

  }

  ngOnInit(): void {
    // this.obtenerEstudiantes();
  }

  // private obtenerEstudiantes(){
  //   this.estudianteService.obtenerEstudiantes().subscribe(dato => {
  //     console.log(dato);
  //     this.estudiante = dato;
  //   })
  // }

  cerrarSession(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}
