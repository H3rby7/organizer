import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../../../../shared/model/member'
import { MemberResourceConfig } from '../../../../../shared/endpoints/member';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberCommonService {

  protected apiBaseUrl = environment.backendApiUrl + MemberResourceConfig.baseUrl;
  protected ePs = MemberResourceConfig.endpoints;
  protected static members: Member[]

  constructor(protected readonly http: HttpClient) { }

  getAll(): Promise<Member[]> {
    if (MemberCommonService.members) {
      return Promise.resolve(MemberCommonService.members);
    }
    const promise = this.http[this.ePs.ALL.method.toString()](`${this.apiBaseUrl}${this.ePs.ALL.path}`).toPromise() as Promise<Member[]>;
    promise.then(res => MemberCommonService.members = res);
    return promise;
  }

  getOneById(id: string): Promise<Member[]> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.GET_BY_ID.path}`;
    apiUrl = apiUrl.replace(':id', id);
    return this.http[this.ePs.GET_BY_ID.method.toString()](apiUrl).toPromise();
  }

}
