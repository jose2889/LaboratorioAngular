import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-html-to-img',
  templateUrl: './html-to-img.component.html',
  styleUrls: ['./html-to-img.component.css']
})
export class HtmlToImgComponent implements OnInit {

  texto:string;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  downloadCanvas(canvasId) {
    // Obteniendo la etiqueta la cual se desea convertir en imagen
    var domElement = document.getElementById(canvasId);
 
    
    html2canvas(domElement).then((canvas) => {
      // document.body.appendChild(canvas);
      console.log(canvas.toDataURL());
    //  window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
    });
}
}
