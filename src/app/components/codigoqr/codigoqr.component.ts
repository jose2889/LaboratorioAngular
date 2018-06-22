import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.component.html',
  styleUrls: ['./codigoqr.component.css']
})
export class CodigoqrComponent implements OnInit {

  codigo:string;
  x:number;
  
  y:number;
  

  constructor() { }

  ngOnInit() {
  }

}
