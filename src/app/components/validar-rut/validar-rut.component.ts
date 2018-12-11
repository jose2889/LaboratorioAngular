import { Component, OnInit } from '@angular/core';
import { formatterRut, cleanRut } from 'chilean-formatter'; 


/*
formateador chileno

Ejemplo
 import { numberToClp } from 'chilean-formatter'  
      const price = "60000";  
      console.log(numberToClp(price))  // $60.000

- formatterRut("181303859") -> 18.130.385-9
- cleanRut("18.130.385-9") -> 18130385  // without dv
- cleanRut("18.130.385-9",true) -> 181303859 // with dv
- validateRut("181303859")  -> true
- numberToClp("1256500") -> $1.256.500 
- numberToClp("1256500",',') -> $1,256,500  // with separator
- cleanClp("$1.256.500") -> 1256500  
- getRutDv(18130385) -> 9

*/

@Component({
  selector: 'app-validar-rut',
  templateUrl: './validar-rut.component.html',
  styleUrls: ['./validar-rut.component.css']
})
export class ValidarRutComponent implements OnInit {

  valido: boolean = true; 
  name;
  constructor() { }

  ngOnInit() {
    
  }

  
  mask(){
    this.name = formatterRut(this.name);
    //console.log(formatterRut(this.name));

  }

  validRut(){
    
    let valor = cleanRut(this.name,true);
    
    console.log("valor limpio",valor); 
    
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
    //		alert('rut inválido')
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
    //  alert('El Rut Ingresado es Correcto!')
      this.valido = true;
      return true;
    }
  }
}
