import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberAdminService } from '../member-admin.service';
import { Member } from '../../../../../../shared/model/member';

@Component({
  selector: 'app-add-member-modal',
  templateUrl: './add-member-modal.component.html',
  styleUrls: ['./add-member-modal.component.scss']
})
export class AddMemberModalComponent implements OnInit {

  member: Member = new Member("");

  constructor(private readonly activeModal: NgbActiveModal,
  private readonly service: MemberAdminService) { }

  ngOnInit() {
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  onConfirm() {
    this.service.createNewMember(this.member)
      .then(res => this.activeModal.close(res))
      .catch(err => console.log(err));
  }

}
