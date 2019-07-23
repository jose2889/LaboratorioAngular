import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-blag-tab',
  templateUrl: './blag-tab.component.html',
  styleUrls: ['./blag-tab.component.css']
})
export class BlagTabComponent implements OnInit {
  configuracion:any;

  
  array: any[] = [{ name: 'John'} , { name: 'Mary' }, { name: 'Adam' }];
  order: string = 'name';

  constructor( private toastr: ToastsManager, private orderPipe: OrderPipe,
    private vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);

      console.log(this.orderPipe.transform(this.array, this.order));
    }

  ngOnInit() {
    this.configuracion = {
      base_url: '/tinymce', 
      suffix: '.min',  
      width: 755,
      height: 500,
      resize: false,
      language: 'es',
      language_url: 'assets/editor/tinymce-language-es.js',
      autosave_ask_before_unload: false,
      //  mentions_fetch: mentionsFetchFunction,
      powerpaste_allow_local_images: true,
      plugins: [
        " advlist anchor autolink codesample colorpicker fullscreen image imagetools ",
        " lists link media noneditable preview",
        " searchreplace table template textcolor visualblocks wordcount "
      ],
      templates: [
        {
          title: "Non-editable Example",
          description: "Non-editable example.",
          content: "table"
        },
        {
          title: "Simple Table Example",
          description: "Simple Table example.",
          content: "table2"
        }
      ],
      toolbar:
        "insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image tinydrive",
      content_css: [
        // "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
        // "//www.tiny.cloud/css/content-standard.min.css"
      ],
      spellchecker_dialog: true,
      spellchecker_whitelist: ['Ephox', 'Moxiecode'],
      tinydrive_demo_files_url: '/docs/demo/tiny-drive-demo/demo_files.json',
      tinydrive_token_provider: function (success, failure) {
        success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
      }
    }
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }
  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('',
      'Custom Message',
      {
        enableHTML: true,
        dismiss: 'click',
        toastLife: 3000,
        showCloseButton: true,
        positionClass: 'toast-bottom-right',
        messageClass: "border",
        titleClass: 'border',
        animate: 'flyRight'
      });
  }

  
}
