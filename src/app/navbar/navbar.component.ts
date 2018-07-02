import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navegar(ruta){
    
    if (ruta == 1)
    this.router.navigate(['formulario']); 
    if (ruta == 2)
    this.router.navigate(['qr']); 
    
  }

}
