import { Injectable } from '@angular/core';
import { EventCommonService } from '../events-common/events-common.service';
import { Event } from '../../../../../shared/model/event';

@Injectable({
  providedIn: 'root'
})
export class EventAdminService extends EventCommonService {

  createNewEvent(event: Event): Promise<Event> {
    return this.http[this.ePs.ADD.method.toString()](`${this.apiBaseUrl}${this.ePs.ADD.path}`, event).toPromise();
  }

  deleteEvent(event: Event): Promise<boolean> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.DELETE.path}`;
    apiUrl = apiUrl.replace(':id', event._id);
    return this.http[this.ePs.DELETE.method.toString()](apiUrl).toPromise();
  }

  updateEvent(event: Event): Promise<Event> {
    let apiUrl = `${this.apiBaseUrl}${this.ePs.UPDATE.path}`;
    apiUrl = apiUrl.replace(':id', event._id);
    return this.http[this.ePs.UPDATE.method.toString()](apiUrl, event).toPromise();
  }

}
