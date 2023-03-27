import { Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { onAuthStateChanged } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth:Auth) { }

  //registrarme
  registro({email,password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  //iniciar session con usuario registrado
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  //registrarme con Google
  loginConGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

    //cerrar session
  logout(){
    return signOut(this.auth);
  }



}
