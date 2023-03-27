import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableEstudianteComponent } from './pages/table-estudiante/table-estudiante.component';


//importacion de guard autorizacion de permisos
import { canActivate ,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { AgregarEstudianteComponent } from './pages/agregar-estudiante/agregar-estudiante.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [

  {path: '',redirectTo:'/login',pathMatch: 'full'},
  
  {path:'home',
  component:DashboardComponent,
  ...canActivate(()=>redirectUnauthorizedTo(['/registro']))},

  {path: 'registro',component: RegistroComponent,pathMatch:'full'},
  {path: 'login', component : LoginComponent, pathMatch:'full'},
  {path: 'tabla', component: TableEstudianteComponent,pathMatch:'full'},
  {path:  'agregar', component: AgregarEstudianteComponent, pathMatch:'full'},
  {path:  'editar/:id', component: EditarComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
