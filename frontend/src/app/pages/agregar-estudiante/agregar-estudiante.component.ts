import { Component, OnInit} from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/services/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();



  constructor( private estudianteService:EstudianteService, private router: Router, private fb: FormBuilder) {


    }

  ngOnInit(): void {
  }

  guardarEstudiante(){
    this.estudianteService.registrarEstudiante(this.estudiante).subscribe(dato => {
      console.log(dato);
      this.gestionEstudiante();
    })
  }

  //funcion para retornar a tablaEstudiante
  gestionEstudiante(){
    this.router.navigate(['/tabla']);
    swal.fire('Estudiante registrado', `el estudiante ${this.estudiante.nombre} ha sido registrado con exito!`, `success`);
  }

  onSubmit(){
    this.guardarEstudiante();
    console.log(this.estudiante);
  }

}
