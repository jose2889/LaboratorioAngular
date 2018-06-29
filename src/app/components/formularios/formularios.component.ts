import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  public usuario;
 
  constructor(){
    // Definimos el objeto usuario, vació inicialmente (necesario)
    this.usuario = {
        "nombre": "",
        "apellidos": "",
        "email": "",
        "password": ""
    };
  }
 
  onSubmit(){
    // Mostramos el objeto usuario
    console.log(this.usuario);
  }

}
