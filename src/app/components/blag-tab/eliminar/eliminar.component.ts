import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements AfterViewInit {

  ckeditorContent:string ='esto es una prueba';

  @ViewChild(CKEditorComponent) ckeditor:CKEditorComponent; 

  constructor() { }

  ngAfterViewInit() {
  // let editor = this.ckeditor.instance;
    // console.log("valor",editor);

  // editor.config.toolbarGroups = [
	// 	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
	// 	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
	// 	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
	// 	{ name: 'forms', groups: [ 'forms' ] },
	// 	'/',
	// 	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	// 	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	// 	{ name: 'links', groups: [ 'links' ] },
	// 	{ name: 'insert', groups: [ 'insert' ] },
	// 	'/',
	// 	{ name: 'styles', groups: [ 'styles' ] },
	// 	{ name: 'colors', groups: [ 'colors' ] },
	// 	{ name: 'tools', groups: [ 'tools' ] },
	// 	{ name: 'others', groups: [ 'others' ] },
	// 	{ name: 'about', groups: [ 'about' ] }
	// ];

	// editor.config.removeButtons = 'Source,Form,HiddenField,Checkbox,Radio,TextField,Textarea,Select,Button,CreateDiv,Maximize,ShowBlocks,About,Iframe,Language,BidiRtl,BidiLtr';
  }

  

  mostrar(){
    console.log(this.ckeditorContent);
  }
}
