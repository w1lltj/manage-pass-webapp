import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {PasswordDataService} from '../password-data.service';
import {PasswordData} from '../password-data.model';


@Component({
  selector: 'content-modal',
  templateUrl: './content-modal.component.html'
})
export class ContentModalComponent implements OnDestroy {
  @Input() data: any;
  isAddEdit = false;


  addEditForm: FormGroup = new FormGroup({
    'accountname': new FormControl(),
    'username': new FormControl(),
    'password': new FormControl()
  });

  constructor(public activeModal: NgbActiveModal, private passwordDataService: PasswordDataService) {}

  onEdit() {
    this.isAddEdit = !this.isAddEdit;
    console.log('data,..... ', this.data);  // ToDo: cleanup

    this.addEditForm.setValue({
        'accountname': this.data.accountname,
        'username': this.data.username,
        'password': this.data.password
      } ,
      {emitEvent: false}
      );
  }

  ngOnDestroy() {
    this.isAddEdit = false;
    this.data = null;
  }

  onSubmit() {
    const passwordData: PasswordData = {
      accountname: this.addEditForm.get('accountname').value,
      username: this.addEditForm.get('username').value,
      password: this.addEditForm.get('password').value
    };

    if (!this.data) {
      this.passwordDataService.onAddData(passwordData).subscribe(_ => this.activeModal.close('added new data!!!!!'));
    } else {
      const updatedData = { ...{_id: this.data._id}, ...passwordData };
      this.passwordDataService.onUpdateData(updatedData).subscribe(_ => this.activeModal.close('updated data!!!!!'));
    }
  }

  onDelete() {
    if(this.data) {
      this.passwordDataService.onDeleteData(this.data._id).subscribe( _ => this.activeModal.close('deleted data!!!!!'));
    }
  }
}
