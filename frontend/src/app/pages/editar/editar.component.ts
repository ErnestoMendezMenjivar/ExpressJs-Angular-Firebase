import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Estudiante } from 'src/app/services/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id!: string;

  estudiante: Estudiante = new Estudiante();

  constructor(private estudianteService:EstudianteService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.estudianteService.selecionarEstudiantePorID(this.id).subscribe(dato => {
      this.estudiante = dato;

    }, error => console.log(error)
    )
  }

  //metodo para regresar a tabla estudiante
  irAlistaEstudiantes(){
    this.router.navigate(['/tabla']);
    swal.fire('Estudiante actualizado', `El estudiante ${this.estudiante.nombre} ha sido actualizado con exito!`,`success`);
  }

  onSubmit(){
    this.estudianteService.editarEstudiante(this.id,this.estudiante).subscribe(dato => {
      this.irAlistaEstudiantes();
    }, error => console.log(error));
  }

}
