import { Injectable } from '@angular/core';
import { MemberCommonService } from '../member-common/member-common.service';
import { Member } from '../../../../../shared/model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberAdminService extends MemberCommonService {

  createNewMember(member: Member): Promise<Member> {
    return this.http.post<Member>(`${this.apiBaseUrl}/add`, member).toPromise();
  }
}
