import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMemberModalComponent } from '../add-member-modal/add-member-modal.component';
import { Member } from '../../../../../../shared/model/member';
import { MemberAdminService } from '../member-admin.service';

@Component({
  selector: 'app-member-admin-dashboard',
  templateUrl: './member-admin-main.component.html',
  styleUrls: ['./member-admin-main.component.scss']
})
export class MemberAdminComponent implements OnInit {

  members: Member[];

  constructor(private readonly modalService: NgbModal, private readonly adminService: MemberAdminService) {
    this.adminService.getAll()
      .then(res => this.members = res)
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }

  openNewMemberModal() {
    this.modalService.open(AddMemberModalComponent, { centered: true }).result
      .then((nextMember: Member) => {
        this.members.push(nextMember);
      })
      .catch(err => console.log(err));
  }

  deleteMember(member: Member) {
    this.adminService.deleteMember(member)
      .then(res => {
        this.members.splice(this.members.indexOf(member), 1);
      })
      .catch(err => console.log(err));
  }

}
