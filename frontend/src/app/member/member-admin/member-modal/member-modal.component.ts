import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberAdminService } from '../member-admin.service';
import { Member } from '../../../../../../shared/model/member';
import { cp } from '../../../../../../shared/util/copy';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss']
})
export class MemberModalComponent implements OnInit {

  isUpdate = false;

  private member = new Member("", "active");

  @Input("member")
  set setMember(nextMember: Member) {
    this.member = cp(nextMember);
    this.isUpdate = true;
  }

  constructor(private readonly activeModal: NgbActiveModal,
    private readonly service: MemberAdminService) { }

  ngOnInit() {
  }

  isInputValid(): boolean {
    if (!this.member.name) {
      return false;
    }
    return true;
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  onConfirm() {
    if (!this.isUpdate) {
      this.service.createNewMember(this.member)
        .then(this.closeWithResult.bind(this))
        .catch(this.handleFail.bind(this))
      return;
    }
    this.updateMember();
  }

  updateMember() {
    this.service.updateMember(this.member)
      .then(this.closeWithResult.bind(this))
      .catch(this.handleFail.bind(this));
  }

  closeWithResult(res: any) {
    this.activeModal.close(res);
  }

  handleFail(err: any) {
    console.log(err);
  }

}
