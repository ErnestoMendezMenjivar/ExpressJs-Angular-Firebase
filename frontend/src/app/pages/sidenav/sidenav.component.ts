import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit,Inject, ChangeDetectorRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  router: Router;


  constructor(@Inject(Router) router: Router,public userService:UsuarioService) {

    this.router = router;


   }

  ngOnInit(): void {
    
  }

  cerrarSession(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }


}
