import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../../../../../shared/model/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members: Member[];

  @Input('members')
  set setMembers(nextMembers: Member[]) {
    this.members = nextMembers;
  }

  constructor() {

  }

  ngOnInit() {
  }

}
