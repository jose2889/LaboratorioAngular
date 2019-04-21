import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-blag-tab',
  templateUrl: './blag-tab.component.html',
  styleUrls: ['./blag-tab.component.css']
})
export class BlagTabComponent implements OnInit {

  constructor( private toastr: ToastsManager,
    private vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
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
