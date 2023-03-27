import { Component, OnInit } from '@angular/core';

import { Estudiante } from '../../services/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-estudiante',
  templateUrl: './table-estudiante.component.html',
  styleUrls: ['./table-estudiante.component.css']
})




export class TableEstudianteComponent implements OnInit {

  estudiante!: Estudiante[];

  estudianteSeleccionada: Estudiante = new Estudiante();

  constructor(private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    //this.estudiante = [];
    this.obtenerEstudiantes();
  }


  private obtenerEstudiantes() {
    this.estudianteService.obtenerEstudiantes().subscribe(dato => {
      console.log(dato);
      this.estudiante = dato;
    })
  }

  //funcion que redirecionara a otro componente con el id obtenido
  editarEstudiante(id: string){
    console.log(id);
    this.router.navigate(['/editar',id]);
  }

  eliminarEstudiante(id:string){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Confirmar si deseas eliminar el estudiante',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3035d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.estudianteService.delete(id).subscribe(dato =>{
          console.log(dato);
          this.obtenerEstudiantes();
          Swal.fire(
            'estudiante eliminado',
            'El estudiante ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


  //metodo para ver los detalles del alumno
  verDetalles(id:string){
    this.estudianteService.selecionarEstudiantePorID(id).subscribe(estudiante => {
      alert(`Nombre: ${estudiante.nombre}\nApellido: ${estudiante.apellido}\nTelefono: ${estudiante.telefono}\nEdad: ${estudiante.edad}\nEncargado: ${estudiante.encargado}\nSemestre: ${estudiante.semestre}\nEstado: ${estudiante.estado}`);
    })
  }

}
