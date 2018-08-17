import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../../../../shared/model/member'
import { environment } from '../../../environments/environment.prod';

export const MEMBER_API_URL = environment.backendApiUrl + 'member';

@Injectable({
  providedIn: 'root'
})
export class MemberCommonService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Promise<Member[]> {
    return this.http.get<Member[]>(`${MEMBER_API_URL}/all`).toPromise();
  }

}
