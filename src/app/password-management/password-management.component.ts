import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ContentModalComponent} from '../shared/content-modal.component';

@Component({
  selector: 'password-management',
  templateUrl: './password-management.component.html',
  styleUrls: ['./password-management.component.scss']
})
export class PasswordManagementComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onDetail() {
    const modalRef = this.modalService.open(ContentModalComponent);
    (modalRef.componentInstance as ContentModalComponent).data = 'dummy details';
  }
}
