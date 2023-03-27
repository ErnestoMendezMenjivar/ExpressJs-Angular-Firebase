import { Component, OnInit,Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { response } from 'express';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin ={
    email:'',
    password:''
  }

  router: Router;

  constructor(private userService:UsuarioService,private snack:MatSnackBar,@Inject(Router) router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }


  //iniciar session con cuenta registrada
  forSubmit(){

    if (this.formLogin.email == '' || this.formLogin.email == null ) {
      this.snack.open('E-mail   es requerido !!', 'aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    if (this.formLogin.password == '' || this.formLogin.password == null ) {
      this.snack.open('Password   es requerido !!', 'aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    console.log(this.formLogin);

    this.userService.login(this.formLogin)
    .then(response => {
      console.log(response);
      this.router.navigate(['/home']);

    })
    .catch(error => console.log(error));

  }

    //iniciar session con Google
  googleLogin(){
    this.userService.loginConGoogle()
    .then(response =>{
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }

}
