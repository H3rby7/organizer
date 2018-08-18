import { Injectable } from '@angular/core';
import { MemberCommonService } from '../member-common/member-common.service';
import { Member } from '../../../../../shared/model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberAdminService extends MemberCommonService {

  createNewMember(member: Member): Promise<Member> {
    return this.http[this.ePs.ADD.method.toString()](`${this.apiBaseUrl}${this.ePs.ADD.path}`, member).toPromise();
  }

  deleteMember(member: Member): Promise<boolean> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.DELETE.path}`;
    apiUrl = apiUrl.replace(':id', member._id);
    return this.http[this.ePs.DELETE.method.toString()](apiUrl).toPromise();
  }

  updateMember(member: Member): Promise<Member> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.UPDATE.path}`;
    apiUrl = apiUrl.replace(':id', member._id);
    return this.http[this.ePs.UPDATE.method.toString()](apiUrl, member).toPromise();
  }

}
