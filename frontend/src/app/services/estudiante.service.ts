import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../services/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  //conexion de la API RESTFULL
  private baseURL = "http://localhost:8084/api";

  //Conexion api registrar
  private urlbase = 'http://localhost:8084/api/estudiante';

  constructor(private httpClient:HttpClient) { }


  //metodo para obtener estudiantes
  obtenerEstudiantes():Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(`${this.baseURL}/estudiantes`);
  }

  //metodo para registrar
  registrarEstudiante(estudiante: Estudiante): Observable<Object>{
    return this.httpClient.post(`${this.urlbase}`,estudiante)
  }

  //metodo para obtener un estudiante en especifico.
  selecionarEstudiantePorID(id:string):Observable<Estudiante>{
    return this.httpClient.get<Estudiante>(`${this.urlbase}/${id}`);
  }

  //metodo para editar estudiante
  editarEstudiante(id:string,estudiante:Estudiante): Observable<Object>{
    return this.httpClient.put(`${this.urlbase}/${id}`,estudiante);
  }

  //metodo para eliminar estudiante
  delete(id:string):Observable<Object>{
    return this.httpClient.delete(`${this.urlbase}/${id}`);
  }


}
