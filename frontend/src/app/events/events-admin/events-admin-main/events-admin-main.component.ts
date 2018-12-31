import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../../../../../../shared/model/event';
import { EventAdminService } from '../events-admin.service';
import { noop } from 'rxjs';
import { EventModalComponent } from '../events-modal/events-modal.component';

@Component({
  selector: 'app-event-admin-dashboard',
  templateUrl: './events-admin-main.component.html',
  styleUrls: ['./events-admin-main.component.scss']
})
export class EventAdminComponent implements OnInit {

  events: Event[];

  constructor(private readonly modalService: NgbModal, private readonly adminService: EventAdminService) {
    this.adminService.getAll()
      .then(res => this.events = res)
      .catch(err => console.log(err))
  }

  ngOnInit() {
  }

  openNewEventModal() {
    this.modalService.open(EventModalComponent, { centered: true }).result
      .then((nextEvent: Event) => {
        this.events.push(nextEvent);
      })
      .catch(noop);
  }

  openEditEventModal(event: Event) {
    const modal = this.modalService.open(EventModalComponent, { centered: true });
    modal.componentInstance.setEvent = event;
    modal.result
      .then(updateEvent => {
        event.location = updateEvent.location;
        event.startDate = updateEvent.startDate;
        event.endDate = updateEvent.endDate;
      })
      .catch(noop);
  }

  deleteEvent(event: Event) {
    this.adminService.deleteEvent(event)
      .then(res => {
        this.events.splice(this.events.indexOf(event), 1);
      })
      .catch(noop);
  }

}
