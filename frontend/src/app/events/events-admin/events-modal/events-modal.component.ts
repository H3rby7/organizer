import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EventAdminService } from '../events-admin.service';
import { Event } from '../../../../../../shared/model/event';
import { cp } from '../../../../../../shared/util/copy';

@Component({
  selector: 'app-events-modal',
  templateUrl: './events-modal.component.html',
  styleUrls: ['./events-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  isUpdate = false;

  event = new Event(undefined, undefined, undefined, createDefaultdate(), createDefaultdate());

  @Input("event")
  set setEvent(nextEvent: Event) {
    this.event = cp(nextEvent);
    this.isUpdate = true;
  }

  constructor(private readonly activeModal: NgbActiveModal,
    private readonly service: EventAdminService) { }

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
      this.service.createNewEvent(this.event)
        .then(this.closeWithResult.bind(this))
        .catch(this.handleFail.bind(this))
      return;
    }
    this.updateMember();
  }

  updateMember() {
    this.service.updateEvent(this.event)
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

function createDefaultdate(): Date {
  const d = new Date();
  d.setUTCHours(18);
  d.setUTCMinutes(0);
  d.setUTCSeconds(0);
  d.setUTCMilliseconds(0);
  return d;
}