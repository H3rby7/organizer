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

  deleteMember(member: Member): Promise<boolean> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.GET_BY_ID.path}`;
    apiUrl = apiUrl.replace(':id', member._id);
    return this.http[this.ePs.DELETE.method.toString()](apiUrl).toPromise();
  }

}
