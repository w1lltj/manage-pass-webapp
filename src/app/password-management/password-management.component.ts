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
  passwordDatas: Observable<any>;


  constructor(private modalService: NgbModal, private passwordDataService: PasswordDataService) { }

  ngOnInit() {
    this.passwordDatas = this.passwordDataService.onGetAllDatas();
  }

  onDetail(data: any) {
    const modalRef = this.modalService.open(ContentModalComponent);
    (modalRef.componentInstance as ContentModalComponent).data = data;

    modalRef.result.then(
      (res) => {
        console.log('modal..... ', res);
        this.passwordDatas = this.passwordDataService.onGetAllDatas();
      },
      _ => {}
    );
  }

  onAddData() {
    const modalRef = this.modalService.open(ContentModalComponent);
    (modalRef.componentInstance as ContentModalComponent).isAddEdit = true;

    modalRef.result.then(
      (res) => {
        console.log('modal..... ', res);
        this.passwordDatas = this.passwordDataService.onGetAllDatas();
      },
      _ => {}
    );
  }

  // ToDO: trackBy only works with Array NOT Observable
  trackByFn(idx: number, data: any) {
    return idx;
  }
}
