import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { EventAdminService } from '../events-admin.service';
import { Event } from '../../../../../../shared/model/event';
import { EVENT_TYPE_SHOW, EVENT_TYPE_PRACTICE } from '../../../../../../shared/constants/event-types';
import { cp } from '../../../../../../shared/util/copy';
import * as Moment from 'moment';

@Component({
  selector: 'app-events-modal',
  templateUrl: './events-modal.component.html',
  styleUrls: ['./events-modal.component.scss']
})
export class EventModalComponent implements OnInit {


  TYPE_SHOW = EVENT_TYPE_SHOW;
  TYPE_PRACTICE = EVENT_TYPE_PRACTICE;

  isUpdate = false;
  event = createDefaultEvent();

  @Input("event")
  set setEvent(nextEvent: Event) {
    this.event = cp(nextEvent);
    this.isUpdate = true;
  }

  constructor(
    private readonly activeModal: NgbActiveModal,
    private readonly eventService: EventAdminService,
  ) { }

  ngOnInit() {
  }


  isInputValid(): boolean {
    return true;
  }

  onDismiss() {
    this.activeModal.dismiss();
  }

  onConfirm() {
    if (!this.isUpdate) {
      this.eventService.createNewEvent(this.event)
        .then(this.closeWithResult.bind(this))
        .catch(this.handleFail.bind(this))
      return;
    }
    this.updateMember();
  }

  updateMember() {
    this.eventService.updateEvent(this.event)
      .then(this.closeWithResult.bind(this))
      .catch(this.handleFail.bind(this));
  }

  closeWithResult(res: any) {
    this.activeModal.close(res);
  }

  handleFail(err: any) {
    console.log(err);
  }

}

function createDefaultEvent(): Event {
  const e = new Event(undefined, undefined, undefined, createDefaultdate(), createDefaultdate(20));
  e.organizerId = '';
  return e;
}

function createDefaultdate(hour = 18): Date {
  const d = Moment.utc();
  d.hour(hour);
  d.minute(0);
  d.second(0);
  d.millisecond(0);
  return d.toDate();
}