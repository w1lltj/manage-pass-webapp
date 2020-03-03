import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ContentModalComponent} from '../shared/content-modal.component';
import {PasswordDataService} from '../password-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'password-management',
  templateUrl: './password-management.component.html',
  styleUrls: ['./password-management.component.scss']
})
export class PasswordManagementComponent implements OnInit {
  passwordDatas$: Observable<any>;

  constructor(private modalService: NgbModal, private passwordDataService: PasswordDataService) { }

  ngOnInit() {
    this.passwordDatas$ = this.passwordDataService.onGetAllDatas();
  }

  onDetail(data: any) {
    const modalRef = this.modalService.open(ContentModalComponent);
    (modalRef.componentInstance as ContentModalComponent).data = data;
  }

  onAddData() {
  }
}
