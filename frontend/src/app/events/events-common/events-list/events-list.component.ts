import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../../../../../shared/model/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Event[];

  @Input('events')
  set setEvents(nextEvents: Event[]) {
    this.events = nextEvents;
  }

  @Input() showControls = false;

  @Output() onDelete: EventEmitter<Event> = new EventEmitter();
  @Output() onEdit: EventEmitter<Event> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  deleteEvent(event: Event) {
    this.onDelete.emit(event);
  }

  editEvent(event: Event) {
    this.onEdit.emit(event);
  }

}
