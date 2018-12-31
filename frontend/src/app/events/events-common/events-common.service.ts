import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../../../../shared/model/event'
import { ShowsResourceConfig } from '../../../../../shared/endpoints/shows';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventCommonService {

  protected apiBaseUrl = environment.backendApiUrl + ShowsResourceConfig.baseUrl;
  protected ePs = ShowsResourceConfig.endpoints;

  constructor(protected readonly http: HttpClient) { }

  getAll(): Promise<Event[]> {
    return this.http[this.ePs.ALL.method.toString()](`${this.apiBaseUrl}${this.ePs.ALL.path}`).toPromise();
  }

  getOneById(id: string): Promise<Event[]> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.GET_BY_ID.path}`;
    apiUrl = apiUrl.replace(':id', id);
    return this.http[this.ePs.GET_BY_ID.method.toString()](apiUrl).toPromise();
  }

}
