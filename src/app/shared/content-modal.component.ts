import {Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'content-modal',
  templateUrl: './content-modal.component.html'
})
export class ContentModalComponent {
  @Input() data: any;
  isEdit = false;

  constructor(public activeModal: NgbActiveModal) {}

  onEdit() {
    this.isEdit = !this.isEdit;
  }
}
