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
  pageSize: number;
  currentPage: number = 1;
  totalDatas: number = 0;

  constructor(private modalService: NgbModal, private passwordDataService: PasswordDataService) { }

  ngOnInit() {
    this.passwordDatas = this.passwordDataService.onGetAllDatas();
    this.passwordDatas.subscribe((data) => {
      this.totalDatas = data.length;
    });
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

  setPageSize(size: number) {
    this.pageSize = size;
    this.passwordDatas = this.passwordDataService.onGetAllDatas(this.currentPage, this.pageSize);
  }

  onPageChange() {
    console.log('page changes currentPage..... ', this.currentPage);
    this.passwordDatas = this.passwordDataService.onGetAllDatas(this.currentPage, this.pageSize);
  }

}
