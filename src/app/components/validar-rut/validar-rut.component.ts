import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-rut',
  templateUrl: './validar-rut.component.html',
  styleUrls: ['./validar-rut.component.css']
})
export class ValidarRutComponent implements OnInit {

  valido: boolean; 

  constructor() { }

  ngOnInit() {
  }

  
  Valida_Rut( valor )
  { 
  var tmpstr = "";
  let dv; 
  let mul; 
  let dvi; 
	var intlargo = valor;
	if (intlargo.length> 0)
	{
		let crut = valor;
		let largo = crut.length;
		if ( largo <2 )
		{
			//alert('rut inválido')
      this.valido = false;
			return false;
		}
		for (let i=0; i <crut.length ; i++ )
		if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
		{
			tmpstr = tmpstr + crut.charAt(i);
		}
		let rut:any = tmpstr;
		crut=tmpstr;
		largo = crut.length;
 
		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);
 
		dv = crut.charAt(largo-1);
 
		if ( rut == null || dv == null )
		return 0;
 
		var dvr = '0';
		let suma:number = 0;
		mul  = 2;
    let i: any; 
		for (i = rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}
 
		let res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
 
		if ( dvr != dv.toLowerCase() )
		{
      this.valido = false;
		//	alert('El Rut Ingreso es Invalido')
			return false;
		}
    //alert('El Rut Ingresado es Correcto!')
    this.valido = true;
		return true;
	}
}
}
