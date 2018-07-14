import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codido-barra',
  templateUrl: './codido-barra.component.html',
  styleUrls: ['./codido-barra.component.css']
})
export class CodidoBarraComponent implements OnInit {

  codigobarra:string;

  constructor() { }

  ngOnInit() {
    const elements = document.querySelectorAll('#barra-code img');

        let src = null;
        if (elements.length > 0) {
            src = elements.item(0).getAttribute('src');
        }
        console.log(src);
        // return fetch(src)
        //     .then(res => {
        //         console.log('getImage fetch', res);
        //         return res.blob();
        //     });
  }

}
