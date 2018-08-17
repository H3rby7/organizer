import { Component, OnInit } from '@angular/core';
import { MemberAdminService } from '../member-admin.service';
import { Member } from '../../../../../../shared/model/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

members: Member[];

  constructor(
    private readonly adminService: MemberAdminService) { 
      this.adminService.getAll()
      .then(res => this.members = res)
      .catch(err => console.log(err))
    }

  ngOnInit() {
  }

}
