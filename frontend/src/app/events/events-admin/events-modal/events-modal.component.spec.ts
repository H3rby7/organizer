import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModalComponent } from './events-modal.component';
import { NgbActiveModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { EventAdminService } from '../events-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from '../../../date-time-picker/date-time-picker.module';
import { MemberCommonModule } from '../../../member/member-common/member-common.module';

describe('AddEventModalComponent', () => {
  let component: EventModalComponent;
  let fixture: ComponentFixture<EventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, DateTimePickerModule, NgbDatepickerModule, MemberCommonModule],
      providers: [NgbActiveModal, EventAdminService],
      declarations: [EventModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
