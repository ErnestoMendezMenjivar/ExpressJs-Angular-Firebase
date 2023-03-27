import { Component, OnInit,Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  public registro ={
    email:'',
    password:''
  }
  router: Router;

  constructor(private userService:UsuarioService,private snack:MatSnackBar,@Inject(Router) router: Router) {
    this.router = router;
    }

  ngOnInit(): void {
  }

  forSubmit(){

    if (this.registro.email == '' || this.registro.email == null ) {
      this.snack.open('E-mail   es requerido !!', 'aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    if (this.registro.password == '' || this.registro.password == null ) {
      this.snack.open('Password   es requerido !!', 'aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    console.log(this.registro);


    this.userService.registro(this.registro)
    .then(response =>{
      this.router.navigate(['/login']);
      console.log(response);
    })
    .catch(error => console.log(error));

  }

}
